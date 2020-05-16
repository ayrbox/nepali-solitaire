<!--START OF DEFAULT HTML-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html>
<head>
<link rel="stylesheet" href="css/style.css" type="text/css" />
</head>

<body>
<!--START OF DEFAULT HTML-->


<input type="button" id="newGame" value="New Game" />
<hr>
<center>
<div id="gameWrapper">
	<table id="cardGrid">	
	<?php
	for($iCnt=0;$iCnt<=11;$iCnt++){
		
		echo (($iCnt==0 || $iCnt==4 || $iCnt==8))?"<tr>":"";
		echo "<td class='cardCell'>";
		echo "<div id='CardPlaceID$iCnt'";
		echo " class='cardWrapper'>";		
		//echo "<img src='$cardCode[$iCnt]'/>";		
		echo "</div>";
		echo "</td>";
		
		echo (($iCnt==3 || $iCnt==7 || $iCnt==11))?"</tr>":"";
	}
	?>	
	</table>
</div>
<div id='message'>Message</div>

</center>


<script type="text/JavaScript" src="jquerylibrary.js"></script>
<script type="text/JavaScript">
	//jQuery('div').find('img').andSelf().css('border','1px solid #FF0000');
	
	var firstCard = -1;
	var secondCard = -1;
	var gameStarted = false;
	
	
	$(document).ready(function() {
		
		$.ajaxSetup({
			cache: true,
			dataType: 'xml',
			error: function(xhr, status, error) {
				alert('An error occurred:\n' + error);
			}, 
			timeout: 60000,
			type: 'POST',
			url: 'index.php'
		}); // Close $.ajaxSetup()
		
		
		
		<?php		
		for($iCnt=0;$iCnt<=11;$iCnt++){
			echo "jQuery('#CardPlaceID$iCnt').bind('click',
				{CardPlaceID:$iCnt}, 
				cardClicked);\n";
			
		}		
		?>
	
	
		function cardClicked(e) {
			if(!gameStarted) {
				alert('Game not started');
				return;
			}									
			
			if(jQuery('#CardPlaceID'+e.data.CardPlaceID).data('cardvalue')<0){
				//alert('Card is locked\n you can not select the card');
				return;
			}						
			
			if(firstCard < 0) {
			
				cardPlace = jQuery('#CardPlaceID'+e.data.CardPlaceID);
				
				
				// start block if: cardvalue = 0 (i.e head card
				if(cardPlace.data('cardvalue')==0){
					//alert("this is head card");
					
					//request for one top card and update deck
					$.ajax({
						data: {
							command: 'drawOneCard',
						    positionID: e.data.CardPlaceID,
							existingCardID: cardPlace.data('cardid')
						},
						success: doAjaxServerMessage
					});
					
					
					
					return;
				}//end block if: card value = 0 (i.e head card)
				
				
				
				//start block: Select first card
					//reduce first card opacity to 50%
					cardPlace.stop().fadeTo(10,0.5);
				
					//select firstcard				
					firstCard = e.data.CardPlaceID;					
				//end block: Select first card
				
				
				
			} else {
			
				//if second card == first card then exit function
				if(firstCard == e.data.CardPlaceID) {					
					return;
				}				
				secondCard = e.data.CardPlaceID;
			
				//request for draw two cards
					$.ajax({
						data: {
							command: 'drawCard',
						    positionID1: firstCard,
							positionID2: secondCard,
							existingCardID1: jQuery('#CardPlaceID'+firstCard).data('cardid'),
							existingCardID2: jQuery('#CardPlaceID'+secondCard).data('cardid')
						},
						success: doAjaxServerMessage
				});
			
			
			
				//alert('Card Selected \nFirst Card: ' + firstCard + '\nSecond Card: ' + secondCard);
						
				// if both matches then 
				//reset card opacity
				jQuery('#CardPlaceID' + firstCard).stop().fadeTo(10,1);	
				jQuery('#CardPlaceID' + secondCard).stop().fadeTo(10,1);	
				//reset global varialble
				firstCard = -1;
				secondCard = -1;			
			
			} //Close block: else()
		} //close function(): cardClicked(e);
	
		$('#newGame').click( function() {
			$.ajax({
				data: {command: 'newGame'},
				success: doAjaxServerMessage
			});					
		}); //Close function(): #newGame.Click()
		
		function doAjaxServerMessage(xmlMessage) {
			var msgNode = $(xmlMessage).find("msg");
								
			var msgType =  msgNode.attr("msgtype");
			
			switch(msgType) {
				case "initialcards":
					//alert("New game will be started");
					initialCards(msgNode.children());
					gameStarted = true;		
					break;
				case "onecard":
					//alert("Hmmm... you got one card command");
					oneCardUpdate(msgNode.children());
					break;
				case "message":
					showMessage(msgNode.text());
					break;
				case "drawcard":
					drawCardUpdate(msgNode.children());					
					break;
				default:
					alert("Unrecognize message from server :: " + msgType);
					break;
			}// Close block switch()
			
		} // Close function(): doAjaxServerMessage
		
		function showMessage(messageText) {
			//alert(messageNode.text());
			jQuery('#message').text(messageText);
		}//close function(): showMessage
		
		function oneCardUpdate(cardNode) {
		
			//Note: oneCardUpdate will get only one card
			cardNode.each( function( iIndex) {
				var oCard = $(this);
			
				//retreiving card information from XML data
				var cardID = oCard.attr("cardid");				
				var cardValue = oCard.attr("cardvalue");				
				var placeID = oCard.attr("position"); // placeID for card position to update
				
				//Assigning card data values
				jQuery('#CardPlaceID'+placeID).data("cardid", cardID);
				jQuery('#CardPlaceID'+placeID).data("cardvalue", cardValue);
				
				//updating image at the place (div#CardPlaceID)
				jQuery('#CardPlaceID'+placeID).html("<img src='"+oCard.text()+"'/>");								
				
				
				if(cardValue==0) {				
					jQuery('#CardPlaceID'+placeID).andSelf().css('border','1px solid #00FF00');					
				} else { 
					jQuery('#CardPlaceID'+placeID).andSelf().css('border','1px SOLID #000000');					
				}
				
			});//close function: each card children node
		}//close function(): oneCardUpdate
		
		function drawCardUpdate(cardNodes) {
					
			cardNodes.each( function( iIndex) {
				var oCard = $(this);
			
				
				if (oCard[0].nodeName=="card") {
				
					//retreiving card information from XML data
					var cardID = oCard.attr("cardid");				
					var cardValue = oCard.attr("cardvalue");				
					var placeID = oCard.attr("position"); // placeID for card position to update
					
					//Assigning card data values
						jQuery('#CardPlaceID'+placeID).data("cardid", cardID);
					
						//start block if: lock data card if its head card (i.e. cardvalue = 0)
						if(cardValue==0) {
							jQuery('#CardPlaceID'+placeID).data("cardvalue", -1);
						} else {
							jQuery('#CardPlaceID'+placeID).data("cardvalue", cardValue);
						}
						//end block if: lock data card if its head card (i.e. cardvalue = 0)
					
					//updating image at the place (div#CardPlaceID)
					jQuery('#CardPlaceID'+placeID).html("<img src='"+oCard.text()+"'/>");
					
				} else if (oCard[0].nodeName=="gamefinished") {
					//alert('game finished');
					showMessage('You won. Try again');
				}
				
			});//close function: each card children node
		}//close function(): oneCardUpdate
		
		
		function initialCards(cardNodes) {
			cardNodes.each( function( iIndex) {
				var oCard = $(this);
											
				//retreiving card information from XML data
				var cardID = oCard.attr("cardid");				
				var cardValue = oCard.attr("cardvalue");				
				var placeID = oCard.attr("position"); // placeID for card position to update
				
				//Assigning card data values
				jQuery('#CardPlaceID'+placeID).data("cardid", cardID);
				jQuery('#CardPlaceID'+placeID).data("cardvalue", cardValue);
				
				
				//update border of the card to show that head card can be replaced later
				if(cardValue==0) {				
					jQuery('#CardPlaceID'+placeID).andSelf().css('border','1px solid #00FF00');
				} else { 
					jQuery('#CardPlaceID'+placeID).andSelf().css('border','1px SOLID #000000');
					
				}//close block if
				
				
				
				//updating image at the place (div#CardPlaceID)
				jQuery('#CardPlaceID'+placeID).html("<img src='"+oCard.text()+"'/>");								
				
			});//close function: each card children node
		}//close function(): initialCards
	
	
	}); //Close Script(): document ready
	
	
</script>

</html>
<!--END OF DEFAULT HTML0-->
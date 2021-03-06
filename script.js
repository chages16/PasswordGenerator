        
        //ReplaceAt function
        String.prototype.replaceAt = function(index, replacement) {
            return this.substr(0, index) + replacement + this.substr(index + replacement.length);
            }

        //Complex Password Generator function
        function passwordgen() {
            console.log("Running full password gen");

            alert("Time to choose a password");

            //setting character length
            var charlength = prompt("How many characters do you want the password to be (select number only between 8 and 128)");
      
            if(charlength >7 && charlength< 129) {
            var charlength = Math.floor(charlength);
            alert("Your password will be " + charlength + " characters long");
        }
            else {
            alert("You have input incorrectly- try again");
            return;
        }
            /* user has the ability to choose whether or not they would like to choose a word/ phrase within code
            allows for phrase up to less then 4 letters less than the password length */

            var confirmphrase = confirm("Would you like to use a pre-defined phrase, word or number pattern within your password?");
            if (confirmphrase) {
                var phraselength = charlength-4
                alert ("Phrase must contain no more than " + phraselength + " characters . Spaces will be replaced with dashes and '<'s will be replaced with '('s!!!");
            var passwordphrase = prompt("Type phrase here");
                if (passwordphrase.length > charlength - 4) {
                alert ("Phrase is too long, try again");
                var passwordphrase = "";
                return;
            }
                else {
                    alert("Your Password phrase is ---> ' " + passwordphrase + " ' <--- Blank spaces and '<'s will be replaced.");
                    
                /*     // (User can select where the phrase appears- this will alter the phraseposition value which
                    affects the placement at the end of the function */

                    alert("Now you can choose if you want the phrase at the beginning, end or at a random part of your password");
                    var beginning = confirm("Do you want the phrase at the BEGINNING of your password?");
                    var phraseposition=0;
                        if (beginning == false) {
                        var ending = confirm("Do you want the phrase at the END of your password?");
                        }
                        if (ending == false) {
                            alert("Password will be placed randomly")
                            var phraseposition = Math.floor(Math.random()*(charlength-passwordphrase.length));
                             }
                             else if (ending == true) {
                                 var phraseposition= charlength-passwordphrase.length;
                             }
                }
            }
            else {
          var passwordphrase = "";
          alert ("No worries");
          // ("Passwordphrase: " + passwordphrase);
      }
            //user can now select what other characters appear
            var confirmnumber= confirm("Do you want numbers in your password?");
            var confirmletters= confirm("Do you want Capital Letters in your password?");
            var confirmsymbols= confirm ("Do you want Special Characters in your password?");
             
            


            alert("Initialising new password!");

            //criteria value set at 0 unless all above paramters set
            var criteria = 0;

            //start password loop
            for (var ix = 0; criteria < 1; ix++) {
        
            var lettercount = 1;
            var numbercount = 1;
            var symbolcount = 1;
            var lowercasecount= 0;
            



            //variables below show all symbols used for password as well as the password itself
            var passwordcomplete = "";
            var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            // (letters[(Math.floor(Math.random()*24))].charAt(0));
            // (passwordcomplete.charAt(0));
            var numbers= ["0","1","2","3","4","5","6","7","8","9"];
            var symbols= ["!","@","#","%","&","(","$",")","{","}","?","/",">","]"]
            var capitals= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

                //generate loop the size of the chosen character length to create a password of lower case letters
                for (var ia = 0; ia < charlength; ia++) {
                passwordcomplete += letters[(Math.floor(Math.random()*letters.length))].charAt(0);
                }
                

                
                /* If user selected capital letters we run the below replacement loop. Sets lettercount to 0 for test later.
                Random chance of 50% that a Capital letter will replace an existing character */
                if(confirmletters==true) {
                var lettercount = 0;
                for (var icap = 0; icap < charlength; icap++) {
                var numberstest = Math.floor((Math.random())*6);
                if (numberstest > 2) {
                var passwordcomplete2 = passwordcomplete.replaceAt(icap, capitals[(Math.floor(Math.random()*capitals.length))]);
                var passwordcomplete = passwordcomplete2;
              }
                
                else {
                // (passwordcomplete2);
                }
                }
                }

                /* If user selected numbers we run the below replacement loop. Sets numbercount to 0 for test later.
                Random chance of 40% that a number will replace an existing character */
                if (confirmnumber==true) {
                var numbercount = 0;
                for (var ib = 0; ib < charlength; ib++) {
                var numberstest = Math.floor((Math.random())*5);
                // (numberstest);
                if (numberstest > 2) {
                var passwordcomplete2 = passwordcomplete.replaceAt(ib, numbers[(Math.floor(Math.random()*numbers.length))]);
                // (passwordcomplete2);
                var passwordcomplete = passwordcomplete2;

              }
                else {
                // (passwordcomplete2);
                }
                }
                }

                /* If user selected symbols we run the below replacement loop. Sets symbolcount to 0 for test later.
                Random chance of 40% that a symbol will replace an existing character */
                 
                if (confirmsymbols==true) {
                var symbolcount = 0
                for (var ic = 0; ic < charlength; ic++) {
                var numberstest2 = Math.floor((Math.random())*5);
                if (numberstest2 > 2) {
                var passwordcomplete2 = passwordcomplete.replaceAt(ic, symbols[(Math.floor(Math.random()*symbols.length))]);
                var passwordcomplete = passwordcomplete2;

              }
                else {
                // (passwordcomplete2);
                }
                }
                }
          

            // If password phrase created it sets it at the phraseposition chosen before)
            if(passwordphrase.length > -1) {
            var passwordcomplete2 = (passwordcomplete.replaceAt(phraseposition, passwordphrase));
            var passwordcomplete = passwordcomplete2;
        }

            //replace spaces and any < within the password that may have been input in the phrase
            passwordcomplete = passwordcomplete.replace(/\s/g, "-");

            for (issy=0; issy < charlength - 4; issy++){
                passwordcomplete = passwordcomplete.replace("<", "(");
            }


            // console.log("password " + passwordcomplete)
            
            //Runs a loop to see how many capital letters appear. Adds 1 to variable if they do.
            for (t1=0; t1 < capitals.length; t1++) {
               var charcode = passwordcomplete.indexOf(capitals[t1]); 
               if (charcode > -1){
                   lettercount++;
               }
            }

            //Runs a loop to see how many numbers appear. Adds 1 to variable if they do.
            for (t2=0; t2 < numbers.length; t2++) {
               var charcode = passwordcomplete.indexOf(numbers[t2]);
               // console.log(charcode) 
               if (charcode > -1){
                   numbercount++;
               }
            }

             //Runs a loop to see how many symbols appear. Adds 1 to variable if they do.
             for (t3=0; t3 < symbols.length; t3++) {
               var charcode = passwordcomplete.indexOf(symbols[t3]); 
               if (charcode > -1){
                   symbolcount++;
               }
            }

            //Runs a loop to see how many symbols appear. Adds 1 to variable if they do.
            for (t4=0; t4 < letters.length; t4++) {
               var charcode = passwordcomplete.indexOf(letters[t4]); 
               if (charcode > -1){
                   lowercasecount++;
               }
            }

            //If all parameters selected AND lowercase letters appear in the password, loop will close, else the loop will rerun
            if (symbolcount > 0 && numbercount > 0 && lettercount > 0 && lowercasecount > 0){
                criteria = 1;
            }
            else {
                criteria = 0;
            }
            console.log("Temp Password " + passwordcomplete);
            var loopcount = ix + 1;
        }

            console.log("loopcount: " + loopcount);

            
            
            //password output
            alert("Password is " + passwordcomplete);
            console.log("Final password " + passwordcomplete);
            document.getElementById("result").innerHTML = passwordcomplete;
            var xi2 = document.getElementById("textdisplay");
            xi2.style.display = "block";

        }
        



        // Quick function- ALL parameters will appear, no phrase is set. Only user variable is length.

        //select password length

        function QuickPassword() {
            console.log("Running Quick Gen");
            alert("Time to choose a password");
            var charlength = prompt("How many characters do you want the password to be (select number only between 8 and 128)");
           
            if(charlength >7 && charlength< 129) {
            var charlength = Math.floor(charlength);
            alert("Your password will be " + charlength + " characters long");
        }
            else {
            alert("You have input incorrectly- try again");
            return;
        }

        //set variables and criteria loop so password won't be accepted until all parameters appear   
        var criteria = 0;

        for (var ix = 0; criteria < 1; ix++) {

        var lettercount = 0;
        var numbercount = 0;
        var symbolcount = 0;
        var lowercasecount =0


            var passwordcomplete = "";
            var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            // (letters[(Math.floor(Math.random()*24))].charAt(0));
            // (passwordcomplete.charAt(0));
            var numbers= ["0","1","2","3","4","5","6","7","8","9"];
            var symbols= ["!","@","#","%","&","(","$",")","{","}","?","/",">","]"]
            var capitals= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


            // generate lower case temp password
                for (var ia = 0; ia < charlength; ia++) {
                passwordcomplete += letters[(Math.floor(Math.random()*letters.length))].charAt(0);
                // (passwordcomplete);
                }
                alert("Initialising new password!")

                
             //insert Capitals randomly  
                for (var icap = 0; icap < charlength; icap++) {
                var numberstest = Math.floor((Math.random())*6);
                // (numberstest);
                if (numberstest > 2) {
                var passwordcomplete2 = passwordcomplete.replaceAt(icap, capitals[(Math.floor(Math.random()*capitals.length))]);
                // (passwordcomplete2);
                var passwordcomplete = passwordcomplete2;
                }
            }

             //insert numbers randomly 
                for (var ib = 0; ib < charlength; ib++) {
                var numberstest = Math.floor((Math.random())*5);
                // (numberstest);
                if (numberstest > 2) {
                var passwordcomplete2 = passwordcomplete.replaceAt(ib, numbers[(Math.floor(Math.random()*numbers.length))]);
                // (passwordcomplete2);
                var passwordcomplete = passwordcomplete2;

              }
                
                }
                

             //insert symbols randomly 
                for (var ic = 0; ic < charlength; ic++) {
                var numberstest2 = Math.floor((Math.random())*5);
                // (numberstest2);
                if (numberstest2 > 2) {
                var passwordcomplete2 = passwordcomplete.replaceAt(ic, symbols[(Math.floor(Math.random()*symbols.length))]);
                // (passwordcomplete2);
                var passwordcomplete = passwordcomplete2;

              }
            
                }
          
            //capital letter test
            for (t1=0; t1 < capitals.length; t1++) {
               var charcode = passwordcomplete.indexOf(capitals[t1]); 
               if (charcode > -1){
                   lettercount++;
               }
            }

            //number test
            for (t2=0; t2 < numbers.length; t2++) {
               var charcode = passwordcomplete.indexOf(numbers[t2]);
               // console.log(charcode) 
               if (charcode > -1){
                   numbercount++;
               }
            }

             //symbol test
             for (t3=0; t3 < symbols.length; t3++) {
               var charcode = passwordcomplete.indexOf(symbols[t3]); 
               if (charcode > -1){
                   symbolcount++;
               }
            }

            //lowercase check
            for (t4=0; t4 < letters.length; t4++) {
               var charcode = passwordcomplete.indexOf(letters[t4]); 
               if (charcode > -1){
                   lowercasecount++;
               }
            }

            //If all parameters AND lowercase letters appear in the password, loop will close, else the loop will rerun
            if (symbolcount > 0 && numbercount > 0 && lettercount > 0&& lowercasecount > 0){
                criteria = 1;
            }
            else {
                criteria = 0;
            }
            console.log("Temp Password " + passwordcomplete);
            var loopcount = ix + 1;
        }
            console.log("loopcount: " + loopcount);
            alert("Your quick password is " + passwordcomplete);
            console.log("Final password" + passwordcomplete);

            document.getElementById("result").innerHTML = passwordcomplete;
            var xi2 = document.getElementById("textdisplay");
            xi2.style.display = "block";

        }
void setup() {
  Serial.begin(9600);      // open the serial port at 9600 bps:    
}

void loop() {  
 
  for(int x=0; x< 1000; x++){    // only part of the ASCII chart, change to suit
    Serial.print("data output:\t"); 
    Serial.print(x);       // print as an ASCII-encoded decimal - same as "DEC"
    Serial.print("\n");    // prints a tab
    delay(1000);            // delay 200 milliseconds
  }
  Serial.println("");      // prints another carriage return
}

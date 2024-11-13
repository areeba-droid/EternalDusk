#define LED_PIN 8
#define BUTTON_PIN 7 

byte lastButtonState; 
byte ledState = LOW; 

unsigned long lastTimeButtonStateChanged = millis();
unsigned long debounceDuration = 50; //millis

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT);
  lastButtonState = digitalRead(BUTTON_PIN);
}

void loop() {
  // put your main code here, to run repeatedly:
  if (millis() - lastTimeButtonStateChanged >= debounceDuration){
    byte buttonState = digitalRead(BUTTON_PIN);
    if (buttonState != lastButtonState) {
      lastTimeButtonStateChanged = millis();
      lastButtonState = buttonState; 
      if(buttonState == LOW){ 
        if (ledState == HIGH) {
          ledState = LOW; 
        } else { 
          ledState = HIGH;
        }
        digitalWrite(LED_PIN, ledState);
        Serial.println(ledState);
      }
    }
  }
}

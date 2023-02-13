# UKA_test

  
Backend:

  - må installere Azure CLI globalt:
      - Windows: 
          - npm i -g azure-functions-core-tools@4 --unsafe-perm true
      - Mac: 
          - brew tap azure/functions
          - brew install azure-functions-core-tools@4

  - naviger inn til "scrapeAndExport" folderen, inne i "/backend/api/"
  - kjør "npm install axios cheerio" i terminalen
  - kjør npm start
  - Om du får opp en localhost-lenke er alt klart og du kan starte opp frontenden :) 
  
  dersom du ønsker å gjøre endringer for å teste funksjonen er det kun index.js inne i "/backend/api/scrapeAndExport" som er nødvendig å endres på. :)
  
  
  NB: husk å starte backenden før du starter frontendend
  
  
Frontend: 
  - naviger til frontend-mappa
  - kjør: npm install 
  - kjør: npx expo start
  - scan QR-koden (sørg for å lastet ned Expo Go appen)
  - Appen skal nå starte på mobilen
  
  
Anbefaler å lese denne om man er mer interessert i hvordan Azure functions fungerer: Anbefaler å lese denne: https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=in-process%2Cfunctionsv2&pivots=programming-language-javascript

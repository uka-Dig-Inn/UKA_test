# UKA_test

Frontend: 
  - sørg for å være i root folderen, altså "frontend"
  - npm install 
  - npx expo start
  - scan QR-koden (sørg for å lastet ned Expo Go appen)
  - kjørrrrr
  
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
  - skal komme opp en link i terminalen som dere kan åpne i nettleseren (hold musepekeren over linken og hold inn ctrl mens du trykker på linken)
  - dersom du ønsker å gjøre endringer for å teste funksjonen er det kun index.js inne i "/backend/api/scrapeAndExport" som er nødvendig å endres på. :)
  
  - anbefaler å lese denne om man er mer interessert i hvordan Azure functions fungerer: Anbefaler å lese denne: https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=in-process%2Cfunctionsv2&pivots=programming-language-javascript

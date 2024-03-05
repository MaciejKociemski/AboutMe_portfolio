let language = "pl";

const toggleLanguage = () => {
  language = language === "pl" ? "en" : "pl";
  renderTermsAndConditions();
};

const renderTermsAndConditions = () => {
  const termsAndConditionsDiv = document.getElementById("terms-and-conditions");
  termsAndConditionsDiv.innerHTML =
    language === "pl"
      ? getPolishTermsAndConditions()
      : getEnglishTermsAndConditions();
};

const getPolishTermsAndConditions = () => {
  return `
       <h2>Warunki korzystania z serwisu digiorder</h2>

            <p> Prosimy o przeczytanie poniższych warunków korzystania z serwisu digiorder przed przeglądaniem lub
                korzystaniem z
                naszej strony internetowej.</p>

            <p>Akceptacja Warunków
                Korzystając z naszej strony internetowej, zgadzasz się przestrzegać niniejszych Warunków Korzystania.
                Jeśli nie zgadzasz
                się z którąkolwiek częścią tych warunków, nie korzystaj z naszej strony.</p>
            <p>Ograniczenia użytkowania</p>
            <ul class="term">
                <li>Jesteś uprawniony do przeglądania i pobierania kopii materiałów dostępnych na stronie wyłącznie do
                    użytku osobistego
                    i niekomercyjnego.</li>
                <li>
                    Nie możesz modyfikować, kopiować, publikować, sprzedawać ani rozpowszechniać jakichkolwiek
                    materiałów z tej strony
                    bez naszej zgody pisemnej.</li>
            </ul>
            <p>
                Zakazane działania</p>
            <ul class="term">
                <li>
                    Korzystanie z naszej strony w sposób niezgodny z obowiązującymi przepisami prawa jest surowo
                    zabronione.</li>
                <li>
                    Nie wolno Ci dokonywać żadnych działań, które mogłyby zakłócić, uszkodzić lub naruszyć integralność
                    naszej strony lub
                    sieci serwerów.</li>
            </ul>
            <p>
                Odpowiedzialność</p>
            <p>
                Nie ponosimy odpowiedzialności za jakiekolwiek szkody lub straty wynikłe z korzystania z naszej strony.
            </p>
            <p> Zmiany w Warunkach Korzystania</p>
            Zastrzegamy sobie prawo do zmiany Warunków Korzystania w dowolnym momencie bez wcześniejszego
            powiadomienia. Zalecamy
            regularne sprawdzanie tej strony w celu zapoznania się z aktualnymi Warunkami Korzystania.
            Polityka Prywatności
            Zapoznaj się również z naszą Polityką Prywatności, która wyjaśnia, w jaki sposób gromadzimy, używamy i
            chronimy Twoje
            dane osobowe.
            Korzystając z naszej strony, akceptujesz niniejsze Warunki Korzystania.
    `;
};

const getEnglishTermsAndConditions = () => {
  return `
       <h2>Terms and Conditions for digiorder service</h2>

            <p> Please read the following terms and conditions for using the digiorder service before browsing or
                using our
                website.</p>

            <p>Acceptance of Terms
                By using our website, you agree to comply with these Terms of Use. If you do not agree
                with any part of these terms, do not use our website.</p>
            <p>Limitations on use</p>
            <ul class="term">
                <li>You are entitled to browse and download copies of materials available on the website only for
                    personal use
                    and non-commercial use.</li>
                <li>
                    You may not modify, copy, publish, sell, or distribute any materials from this site
                    without our written consent.</li>
            </ul>
            <p>
                Prohibited actions</p>
            <ul class="term">
                <li>
                    Using our website in violation of applicable law is strictly prohibited.</li>
                <li>
                    You may not take any actions that could disrupt, damage, or compromise the integrity of
                    our website or
                    server networks.</li>
            </ul>
            <p>
                Responsibility</p>
            <p>
                We are not responsible for any damages or losses arising from your use of our website.
            </p>
            <p> Changes to Terms of Use</p>
            We reserve the right to change the Terms of Use at any time without prior notice. We recommend
            checking
            this page regularly to stay informed of the current Terms of Use.
            Privacy Policy
            Please also review our Privacy Policy, which explains how we collect, use, and protect your
            personal
            data.
            By using our website, you agree to these Terms of Use.
    `;
};


renderTermsAndConditions();

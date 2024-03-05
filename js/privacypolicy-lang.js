let language = "pl";

const toggleLanguage = () => {
  language = language === "pl" ? "en" : "pl";
  renderPrivacyPolicy();
};

const renderPrivacyPolicy = () => {
  const privacyPolicyDiv = document.getElementById("privacy-policy");
  privacyPolicyDiv.innerHTML =
    language === "pl" ? getPolishPrivacyPolicy() : getEnglishPrivacyPolicy();
};

const getPolishPrivacyPolicy = () => {
  return `
       <h2>Polityka prywatności</h2>
            <p>Data ostatniej aktualizacji: 2024-02-29</p>
            <p>Dziękujemy za korzystanie z naszej witryny digiorder ("Witryna"). Niniejsza Polityka prywatności
                ("Polityka") ma na celu wyjaśnienie, w jaki sposób gromadzimy, wykorzystujemy i chronimy Twoje dane
                osobowe w związku z korzystaniem z naszej Witryny.</p>
            <p>1. Dane, które gromadzimy
                Dane osobowe: Podczas korzystania z naszej Witryny możemy zbierać różnego rodzaju dane osobowe, w tym,
                ale nie
                ograniczając się do, imienia i nazwiska, adresu e-mail, adresu zamieszkania, dane logowania, informacji
                o urządzeniu,
                dane demograficzne i inne dane, które nam przekazujesz dobrowolnie podczas korzystania z Witryny.
                Dane automatycznie zbierane: W trakcie korzystania z naszej Witryny możemy automatycznie zbierać pewne
                informacje o
                Twoim urządzeniu, w tym adres IP, rodzaj przeglądarki, preferowane języki, system operacyjny, datę i
                godzinę dostępu
                oraz inne dane dotyczące sposobu korzystania z naszej Witryny.</p>
            <p>
                2. Sposób wykorzystywania danych
                Personalizacja doświadczenia użytkownika: Wykorzystujemy zebrane dane w celu personalizacji
                doświadczenia
                użytkownika,
                dostosowania zawartości i funkcji Witryny do Twoich preferencji oraz świadczenia usług zgodnych z Twoimi
                oczekiwaniami.
                Komunikacja z użytkownikami: Możemy użyć Twoich danych kontaktowych, takich jak adres e-mail, do
                przesyłania
                informacji,
                aktualizacji i powiadomień dotyczących naszych produktów i usług.
                Badania i analizy: Analizujemy zebrane dane w celu prowadzenia badań rynkowych, analizy trendów,
                monitorowania
                wydajności Witryny i doskonalenia naszych usług.</p>
            <p>
                3. Udostępnianie danych osobowych
                Podmioty trzecie: Możemy udostępniać Twoje dane osobowe podmiotom trzecim, takim jak dostawcy usług,
                partnerzy
                marketingowi i agencje reklamowe, którzy pomagają nam w świadczeniu usług, prowadzeniu analiz i
                przetwarzaniu płatności.
                Wymogi prawne: W odpowiedzi na żądania organów ścigania, wymogi prawne lub procesy sądowe możemy ujawnić
                Twoje dane
                osobowe.</p>

            <p>4. Bezpieczeństwo danych
                Ochrona danych: Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić Twoje dane osobowe
                przed
                nieuprawnionym dostępem, utratą, zmianą lub nieautoryzowanym ujawnieniem.
                Szyfrowanie: Dane przesyłane między Twoim urządzeniem a naszymi serwerami są zabezpieczone protokołami
                szyfrowania,
                takimi jak SSL, w celu zapewnienia bezpieczeństwa podczas transmisji.</p>
            <p>5. Twoje prawa
                Dostęp do danych: Masz prawo uzyskać dostęp do Twoich danych osobowych, jakie gromadzimy, oraz żądać ich
                poprawiania,
                aktualizacji lub usunięcia.
                Opcje wyboru: Masz możliwość wyboru, czy chcesz otrzymywać od nas powiadomienia marketingowe i
                komunikaty.
                Zgoda: Korzystając z naszej Witryny, wyrażasz zgodę na gromadzenie, wykorzystywanie i przetwarzanie
                Twoich danych
                osobowych zgodnie z niniejszą Polityką prywatności.
            </p>
            <p>
                6. Zmiany w Polityce prywatności
                Aktualizacje: Niniejsza Polityka prywatności może być okresowo aktualizowana w celu uwzględnienia zmian
                w naszych
                praktykach dotyczących prywatności. Zalecamy regularne sprawdzanie tej strony w celu uzyskania
                najnowszych informacji.
                Powiadomienia: W przypadku istotnych zmian w Polityce prywatności będziemy informować Cię o tych
                zmianach poprzez
                publikację nowej wersji Polityki prywatności na naszej Witrynie.</p>
            <p> 7. Kontakt.
                Jeśli masz pytania, uwagi lub żądania dotyczące niniejszej Polityki prywatności, prosimy o kontakt z
                nami pod adresem
                digiorderbusiness@gmail.com.</p>
        </div>
    </div>
    `;
};

const getEnglishPrivacyPolicy = () => {
  return `
       <h2>Privacy Policy</h2>
            <p>Last updated: 2024-02-29</p>
            <p>Thank you for using our digiorder website ("Website"). This Privacy Policy ("Policy") aims to explain how we collect, use, and protect your personal data in connection with the use of our Website.</p>
            <p>1. Data we collect
                Personal data: When using our Website, we may collect various types of personal data, including, but not limited to, name, email address, home address, login information, device information, demographic data, and other data voluntarily provided by you when using the Website.
                Automatically collected data: While using our Website, we may automatically collect certain information about your device, including IP address, browser type, preferred languages, operating system, date and time of access, and other data related to your use of our Website.</p>
            <p>
                2. Use of data
                User experience personalization: We use collected data to personalize user experience, customize Website content and features to your preferences, and provide services in line with your expectations.
                Communication with users: We may use your contact information, such as email address, to send information, updates, and notifications regarding our products and services.
                Research and analysis: We analyze collected data to conduct market research, trend analysis, monitor Website performance, and improve our services.</p>
            <p>
                3. Sharing of personal data
                Third parties: We may share your personal data with third parties, such as service providers, marketing partners, and advertising agencies, who assist us in providing services, conducting analysis, and processing payments.
                Legal requirements: In response to law enforcement requests, legal requirements, or court processes, we may disclose your personal data.</p>

            <p>4. Data security
                Data protection: We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, alteration, or unauthorized disclosure.
                Encryption: Data transmitted between your device and our servers is secured with encryption protocols, such as SSL, to ensure security during transmission.</p>
            <p>5. Your rights
                Access to data: You have the right to access your personal data that we collect and request its correction, update, or deletion.
                Choice options: You have the option to choose whether you want to receive marketing notifications and communications from us.
                Consent: By using our Website, you consent to the collection, use, and processing of your personal data in accordance with this Privacy Policy.</p>
            <p>
                6. Changes to the Privacy Policy
                Updates: This Privacy Policy may be periodically updated to reflect changes in our privacy practices. We recommend regularly checking this page for the latest information.
                Notifications: In the event of significant changes to the Privacy Policy, we will inform you of these changes by publishing a new version of the Privacy Policy on our Website.</p>
            <p> 7. Contact.
                If you have any questions, comments, or requests regarding this Privacy Policy, please contact us at
                digiorderbusiness@gmail.com.</p>
        </div>
    </div>
    `;
;
};


renderPrivacyPolicy();

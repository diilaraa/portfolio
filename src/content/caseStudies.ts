import type { Localized } from "./types";

/**
 * Long-form case studies. Every number is taken from its source (thesis tables, the Symmetry
 * paper, or Dilara's confirmation) — see docs/PLAN.md §6 before editing any metric.
 */

type Img = { src: string; width: number; height: number; alt: Localized; caption?: Localized };

export type Block =
  | { type: "p"; text: Localized }
  | { type: "list"; items: Localized<string[]> }
  | { type: "metrics"; items: { value: string | Localized; label: Localized }[]; note?: Localized }
  | { type: "table"; caption: Localized; head: Localized<string[]>; rows: { label: Localized; values: string[]; highlight?: boolean }[] }
  | { type: "image"; image: Img }
  | { type: "steps"; items: { src: string; width: number; height: number; label: Localized }[]; caption?: Localized }
  | { type: "callout"; text: Localized };

export type CaseSection = { id: string; title: Localized; blocks: Block[] };

export type CaseStudy = {
  slug: string;
  /** Shown as "last updated" for work that is still in progress. */
  updated?: Localized;
  sections: CaseSection[];
};

const L = (tr: string, en: string, de: string): Localized => ({ tr, en, de });
const LL = (tr: string[], en: string[], de: string[]): Localized<string[]> => ({ tr, en, de });

const mpoxImg = (file: string, width: number, height: number, alt: Localized, caption?: Localized): Img => ({
  src: `/images/work/mpox-decision-support/${file}`,
  width,
  height,
  alt,
  caption,
});

const plate = (file: string, width: number, height: number, label: Localized) => ({
  src: `/images/work/cvd-image-filters/${file}.webp`,
  width,
  height,
  label,
});

export const caseStudies: CaseStudy[] = [
  /* ───────────────────────────── Mpox ───────────────────────────── */
  {
    slug: "mpox-decision-support",
    sections: [
      {
        id: "problem",
        title: L("Problem", "Problem", "Problem"),
        blocks: [
          {
            type: "p",
            text: L(
              "Maymun çiçeği (mpox) lezyonları; su çiçeği, kızamık ve inek çiçeği gibi hastalıklarla yüksek morfolojik benzerlik gösterir. Bu nedenle yalnızca görsel değerlendirmeye dayalı ön tanı zordur; PCR testine erişimin sınırlı olduğu bölgelerde bu daha da önemli hale gelir.",
              "Mpox lesions look very similar to those of chickenpox, measles, and cowpox, which makes a preliminary assessment based on visual inspection alone difficult, especially where access to PCR testing is limited.",
              "Mpox-Läsionen ähneln morphologisch stark denen von Windpocken, Masern und Kuhpocken. Eine Ersteinschätzung allein nach Augenschein ist daher schwierig – besonders dort, wo PCR-Tests nur begrenzt verfügbar sind.",
            ),
          },
          {
            type: "p",
            text: L(
              "Literatürdeki çalışmaların çoğu ya yalnızca görüntüye ya da yalnızca klinik semptomlara dayanıyor. Gerçek klinik kararlar ise birden fazla bilgi kaynağını birlikte değerlendirmeyi gerektirir.",
              "Most studies in the literature rely on images only or on clinical symptoms only, while real clinical decisions combine several sources of information.",
              "Die meisten Studien stützen sich entweder nur auf Bilder oder nur auf klinische Symptome, während echte klinische Entscheidungen mehrere Informationsquellen verbinden.",
            ),
          },
        ],
      },
      {
        id: "approach",
        title: L("Yaklaşım", "Approach", "Ansatz"),
        blocks: [
          {
            type: "p",
            text: L(
              "Klinik veriyi, deri lezyonu görüntülerini ve epidemiyolojik veriyi tek bir web platformunda birleştiren, üç modüllü bir karar destek sistemi tasarladık:",
              "We designed a three-module decision support system that brings clinical data, skin-lesion images, and epidemiological data into one web platform:",
              "Wir haben ein Entscheidungsunterstützungssystem mit drei Modulen entworfen, das klinische Daten, Hautläsionsbilder und epidemiologische Daten in einer Webplattform zusammenführt:",
            ),
          },
          {
            type: "list",
            items: LL(
              [
                "Klinik veri tahmin modülü: semptomlardan risk değerlendirmesi yapan topluluk (ensemble) makine öğrenmesi modelleri.",
                "Görüntü analizi modülü: özgün bir görüntü işleme filtresi ve 5 katlı YOLOv9 modeli ile altı sınıflı lezyon sınıflandırması.",
                "Epidemiyoloji paneli: 65.000'i aşkın kayıt içeren zaman serisi verisini ülke ve zaman bazında gösteren interaktif grafikler.",
              ],
              [
                "Clinical prediction module: ensemble machine learning models that assess risk from symptoms.",
                "Image analysis module: an original image processing filter and a 5-fold YOLOv9 model for six-class lesion classification.",
                "Epidemiology dashboard: interactive charts over time-series data with more than 65,000 records, by country and over time.",
              ],
              [
                "Klinisches Vorhersagemodul: Ensemble-Modelle des maschinellen Lernens, die das Risiko anhand von Symptomen einschätzen.",
                "Bildanalysemodul: ein eigener Bildverarbeitungsfilter und ein 5-fach YOLOv9-Modell für die Klassifikation in sechs Klassen.",
                "Epidemiologie-Dashboard: interaktive Diagramme über Zeitreihendaten mit mehr als 65.000 Einträgen, nach Land und Zeit.",
              ],
            ),
          },
        ],
      },
      {
        id: "architecture",
        title: L("Teknik mimari", "Technical architecture", "Technische Architektur"),
        blocks: [
          {
            type: "p",
            text: L(
              "Uygulama Flask üzerinde dört route ile çalışıyor: ana sayfa, epidemiyoloji paneli, klinik analiz ve görüntü analizi. Sonuçlar Jinja2 şablonlarıyla dinamik HTML olarak sunuluyor.",
              "The app runs on Flask with four routes: home, epidemiology dashboard, clinical analysis, and image analysis. Results are rendered as dynamic HTML with Jinja2 templates.",
              "Die Anwendung läuft auf Flask mit vier Routen: Startseite, Epidemiologie-Dashboard, klinische Analyse und Bildanalyse. Ergebnisse werden mit Jinja2-Templates als dynamisches HTML ausgegeben.",
            ),
          },
          {
            type: "list",
            items: LL(
              [
                "Başlangıçta yükleme: iki klinik model joblib ile, beş YOLOv9 ağırlığı (fold1–fold5) ensemble olarak belleğe alınır; böylece her istekte yeniden yükleme maliyeti olmaz.",
                "Kural motoru: semptom yoksa model çalışmadan negatif karar; deri lezyonu olmadan en fazla 3 genel semptom varsa olasılık %15 ile sınırlanır; aksi halde model, optimize edilmiş eşikle karar verir.",
                "Görüntü akışı: yüklenen görüntü UUID ile kaydedilir, özgün filtreden geçer ve beş modele sunulur. %45 güven eşiğini aşan tespitler arasında çoğunluk oyu kazanır.",
                "Epidemiyoloji paneli: Plotly grafikleri HTML parçacığı olarak şablona aktarılır.",
              ],
              [
                "Loaded at startup: two clinical models via joblib and five YOLOv9 weights (fold1–fold5) as an ensemble, so no request pays the loading cost.",
                "Rule engine: no symptoms means a negative decision without running the model; without skin lesions and with at most three general symptoms the probability is capped at 15%; otherwise the model decides with an optimized threshold.",
                "Image flow: the uploaded image is saved under a UUID, passed through the original filter, and sent to all five models. Among detections above a 45% confidence threshold, the majority vote wins.",
                "Epidemiology dashboard: Plotly charts are embedded into the template as HTML fragments.",
              ],
              [
                "Beim Start geladen: zwei klinische Modelle über joblib und fünf YOLOv9-Gewichte (fold1–fold5) als Ensemble – keine Anfrage trägt die Ladekosten.",
                "Regel-Engine: Ohne Symptome fällt eine negative Entscheidung ohne Modell; ohne Hautläsion und mit höchstens drei allgemeinen Symptomen wird die Wahrscheinlichkeit auf 15 % begrenzt; sonst entscheidet das Modell mit optimiertem Schwellenwert.",
                "Bildablauf: Das hochgeladene Bild wird unter einer UUID gespeichert, durch den eigenen Filter geführt und an alle fünf Modelle gegeben. Unter den Erkennungen über 45 % Konfidenz gewinnt die Mehrheit.",
                "Epidemiologie-Dashboard: Plotly-Diagramme werden als HTML-Fragmente in das Template eingebettet.",
              ],
            ),
          },
          {
            type: "image",
            image: mpoxImg(
              "clinical-module.webp",
              1141,
              605,
              L(
                "Klinik analiz modülü: lezyon odaklı ve sistemik risk odaklı iki modül, semptom seçim listeleri.",
                "Clinical analysis module with a lesion-focused and a systemic-risk module and symptom checklists.",
                "Klinisches Analysemodul mit einem läsionsbezogenen und einem systemischen Risikomodul sowie Symptomlisten.",
              ),
              L("Klinik analiz modülü", "Clinical analysis module", "Klinisches Analysemodul"),
            ),
          },
        ],
      },
      {
        id: "data",
        title: L("Veri ve işleme süreci", "Data and processing", "Daten und Verarbeitung"),
        blocks: [
          {
            type: "list",
            items: LL(
              [
                "Klinik veri: MonkeyPoxDetection (GitHub) ve Monkey-Pox PATIENTS Dataset (Kaggle). Keşifçi veri analizinde ateş ve döküntü gibi semptomların sağlıklı bireylerde de sık görüldüğü, bu yüzden tek semptoma dayalı kararın yetersiz olduğu görüldü.",
                "Görüntü verisi: MSLD v2.0 ve MSID veri setleri birleştirildi; altı sınıf (Monkeypox, Healthy, Cowpox, Chickenpox, HFMD, Measles) 5 katlı çapraz doğrulama yapısında düzenlendi.",
                "Etiketleme: veri setlerinde lezyon koordinatı olmadığı için her görüntü tamamını kapsayan tek bir kutu ile etiketlendi. Bu yüzden değerlendirme, görüntü düzeyinde sınıflandırma metrikleriyle (precision, recall, F1) yapıldı.",
              ],
              [
                "Clinical data: MonkeyPoxDetection (GitHub) and the Monkey-Pox PATIENTS Dataset (Kaggle). Exploratory analysis showed that symptoms such as fever and rash are also common in healthy people, so a single symptom is not enough to decide.",
                "Image data: the MSLD v2.0 and MSID datasets were merged and organized into six classes (Monkeypox, Healthy, Cowpox, Chickenpox, HFMD, Measles) with 5-fold cross-validation.",
                "Labeling: the datasets have no lesion coordinates, so each image was labeled with a single box covering the whole image. Evaluation therefore uses image-level classification metrics (precision, recall, F1).",
              ],
              [
                "Klinische Daten: MonkeyPoxDetection (GitHub) und der Monkey-Pox PATIENTS Dataset (Kaggle). Die explorative Analyse zeigte, dass Symptome wie Fieber und Ausschlag auch bei Gesunden häufig sind – ein einzelnes Symptom reicht für eine Entscheidung nicht aus.",
                "Bilddaten: Die Datensätze MSLD v2.0 und MSID wurden zusammengeführt und in sechs Klassen (Monkeypox, Healthy, Cowpox, Chickenpox, HFMD, Measles) mit 5-facher Kreuzvalidierung organisiert.",
                "Annotation: Die Datensätze enthalten keine Läsionskoordinaten, daher wurde jedes Bild mit einer Box über das ganze Bild annotiert. Bewertet wird deshalb mit Klassifikationsmetriken auf Bildebene (Precision, Recall, F1).",
              ],
            ),
          },
          {
            type: "p",
            text: L(
              "Özgün görüntü işleme filtresi, lezyonları model için daha belirgin hale getirmek üzere tasarlandı: görüntü CIELAB renk uzayına çevrilir; yalnızca parlaklık (L) kanalına db1 dalgacığıyla iki boyutlu ayrık dalgacık dönüşümü uygulanır, detay katsayıları güçlendirilerek ters dönüşümle birleştirilir, ardından CLAHE ile yerel kontrast dengelenir. Renk kanalları korunur.",
              "The original image processing filter was designed to make lesions more distinct for the model: the image is converted to CIELAB; a 2D discrete wavelet transform (db1) is applied to the lightness (L) channel only, the detail coefficients are amplified and recombined with the inverse transform, and CLAHE then balances local contrast. Color channels are preserved.",
              "Der eigene Bildverarbeitungsfilter soll Läsionen für das Modell deutlicher machen: Das Bild wird nach CIELAB umgewandelt; nur auf den Helligkeitskanal (L) wird eine 2D-Wavelet-Transformation (db1) angewendet, die Detailkoeffizienten werden verstärkt und per Rücktransformation zusammengeführt, danach gleicht CLAHE den lokalen Kontrast aus. Die Farbkanäle bleiben erhalten.",
            ),
          },
        ],
      },
      {
        id: "evaluation",
        title: L("Model değerlendirmesi", "Model evaluation", "Modellbewertung"),
        blocks: [
          {
            type: "table",
            caption: L(
              "Görüntü modülü: altı sınıf, 5 katlı çapraz doğrulama ortalamaları (Tez, Tablo 4.6–4.7)",
              "Image module: six classes, 5-fold cross-validation averages (thesis, Tables 4.6–4.7)",
              "Bildmodul: sechs Klassen, Mittelwerte der 5-fachen Kreuzvalidierung (Abschlussarbeit, Tab. 4.6–4.7)",
            ),
            head: LL(["Yapılandırma", "Precision", "Recall", "F1"], ["Configuration", "Precision", "Recall", "F1"], ["Konfiguration", "Precision", "Recall", "F1"]),
            rows: [
              { label: L("Orijinal veri (AdamW)", "Original data (AdamW)", "Originaldaten (AdamW)"), values: ["0.7914", "0.7445", "0.7666"] },
              { label: L("Özgün filtre (AdamW)", "Original filter (AdamW)", "Eigener Filter (AdamW)"), values: ["0.8523", "0.8636", "0.8548"] },
              { label: L("Özgün filtre (MuSGD)", "Original filter (MuSGD)", "Eigener Filter (MuSGD)"), values: ["0.8611", "0.8916", "0.8753"] },
              { label: L("Özgün filtre + MuSGD + ince ayar", "Original filter + MuSGD + fine-tuning", "Eigener Filter + MuSGD + Feinabstimmung"), values: ["0.9195", "0.8823", "0.8999"], highlight: true },
            ],
          },
          {
            type: "metrics",
            items: [
              { value: "0.9086", label: L("Monkeypox sınıfı F1", "Monkeypox class F1", "F1 Klasse Monkeypox") },
              { value: "0.9564", label: L("Healthy sınıfı F1", "Healthy class F1", "F1 Klasse Healthy") },
              { value: "0.8106", label: L("En düşük: Cowpox F1", "Lowest: Cowpox F1", "Niedrigster: Cowpox F1") },
            ],
            note: L(
              "Sınıf bazlı değerler 5 katlı ortalamadır (Tez, Tablo 4.8). Cowpox, Monkeypox ve Chickenpox ile benzerliği nedeniyle en zor ayrışan sınıf oldu.",
              "Per-class values are 5-fold averages (thesis, Table 4.8). Cowpox was the hardest class to separate because of its similarity to Monkeypox and Chickenpox.",
              "Klassenwerte sind Mittelwerte über 5 Folds (Abschlussarbeit, Tab. 4.8). Cowpox war wegen der Ähnlichkeit zu Monkeypox und Chickenpox am schwersten zu trennen.",
            ),
          },
          {
            type: "image",
            image: mpoxImg(
              "confusion-matrix.webp",
              1255,
              1193,
              L(
                "İnce ayar yapılmış modelin 5 katlı genel karmaşıklık matrisi; köşegende Monkeypox %90,6, Healthy %95,4, Chickenpox %93,7, Cowpox %80,3, HFMD %86,5, Measles %89,1.",
                "Overall 5-fold confusion matrix of the fine-tuned model; diagonal: Monkeypox 90.6%, Healthy 95.4%, Chickenpox 93.7%, Cowpox 80.3%, HFMD 86.5%, Measles 89.1%.",
                "Gesamte 5-Fold-Konfusionsmatrix des feinabgestimmten Modells; Diagonale: Monkeypox 90,6 %, Healthy 95,4 %, Chickenpox 93,7 %, Cowpox 80,3 %, HFMD 86,5 %, Measles 89,1 %.",
              ),
              L("Genel karmaşıklık matrisi (%)", "Overall confusion matrix (%)", "Gesamt-Konfusionsmatrix (%)"),
            ),
          },
          {
            type: "p",
            text: L(
              "Klinik modülde ağırlıklı bir Voting Classifier (SVM, Lojistik Regresyon, CatBoost, XGBoost, Naive Bayes, Random Forest) 0,64 karar eşiğiyle hasta sınıfında 0,90 recall ve 0,91 F1'e ulaştı. Sağlıklı sınıfta ise recall 0,40'ta kaldı; veri setindeki sınıf dengesizliği bu modelin en önemli sınırı.",
              "In the clinical module, a weighted Voting Classifier (SVM, Logistic Regression, CatBoost, XGBoost, Naive Bayes, Random Forest) with a 0.64 decision threshold reached 0.90 recall and 0.91 F1 for the patient class. For the healthy class, recall stayed at 0.40; class imbalance in the data is this model's main limitation.",
              "Im klinischen Modul erreichte ein gewichteter Voting Classifier (SVM, logistische Regression, CatBoost, XGBoost, Naive Bayes, Random Forest) mit Schwellenwert 0,64 für die Klasse „erkrankt“ einen Recall von 0,90 und F1 von 0,91. Für die Klasse „gesund“ blieb der Recall bei 0,40 – das Klassenungleichgewicht ist die wichtigste Grenze dieses Modells.",
            ),
          },
        ],
      },
      {
        id: "dashboard",
        title: L("Epidemiyoloji paneli", "Epidemiology dashboard", "Epidemiologie-Dashboard"),
        blocks: [
          {
            type: "image",
            image: mpoxImg(
              "epidemiology-dashboard.webp",
              840,
              881,
              L(
                "Küresel Mpox epidemiyoloji paneli: doğrulanmış ve şüpheli vakaları gösteren interaktif dünya haritası, en çok vaka görülen ülkeler ve günlük vaka zaman serisi.",
                "Global mpox epidemiology dashboard: interactive world map of confirmed and suspected cases, top countries by cases, and a daily case time series.",
                "Globales Mpox-Epidemiologie-Dashboard: interaktive Weltkarte bestätigter und Verdachtsfälle, Länder mit den meisten Fällen und tägliche Fallzeitreihe.",
              ),
              L("Küresel epidemiyoloji paneli", "Global epidemiology dashboard", "Globales Epidemiologie-Dashboard"),
            ),
          },
        ],
      },
      {
        id: "limitations",
        title: L("Sınırlılıklar", "Limitations", "Grenzen"),
        blocks: [
          {
            type: "list",
            items: LL(
              [
                "Tüm modeller kamuya açık veri setleriyle eğitildi; gerçek hastane verisiyle prospektif bir doğrulama yapılmadı.",
                "Görüntü veri setleri; aydınlatma, kamera kalitesi ve cilt tonu çeşitliliği açısından gerçek klinik ortamı tam temsil etmeyebilir.",
                "Tam görüntü etiketleme nedeniyle model lezyonun yerini değil, görüntünün sınıfını tahmin ediyor.",
                "Klinik modelde sınıf dengesizliği, sağlıklı bireyleri ayırt etme başarısını sınırlıyor.",
              ],
              [
                "All models were trained on public datasets; there has been no prospective validation with real hospital data.",
                "The image datasets may not fully represent real clinical settings in lighting, camera quality, and skin-tone diversity.",
                "Because of whole-image labeling, the model predicts the image's class, not the lesion's location.",
                "Class imbalance in the clinical model limits how well it recognizes healthy people.",
              ],
              [
                "Alle Modelle wurden mit öffentlichen Datensätzen trainiert; eine prospektive Validierung mit echten Klinikdaten gab es nicht.",
                "Die Bilddatensätze bilden reale klinische Bedingungen bei Beleuchtung, Kameraqualität und Hauttönen möglicherweise nicht vollständig ab.",
                "Wegen der Ganzbild-Annotation sagt das Modell die Klasse des Bildes vorher, nicht die Position der Läsion.",
                "Das Klassenungleichgewicht im klinischen Modell begrenzt die Erkennung gesunder Personen.",
              ],
            ),
          },
        ],
      },
      {
        id: "contribution",
        title: L("Katkım ve süreç", "My role and process", "Meine Rolle und der Ablauf"),
        blocks: [
          {
            type: "list",
            items: LL(
              [
                "TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı'na Kasım 2024'te başvurduk; proje Nisan 2025'te desteklenmeye hak kazandı. Projenin yürütücüsüyüm.",
                "Bitirme çalışmasını Hayrunnisa Yılmaz ile birlikte, Dr. Öğr. Üyesi Fatma Akalın danışmanlığında yürüttük.",
                "Python, scikit-learn, OpenCV, YOLOv9, Flask, Jinja2 ve Plotly ile modelleri eğittik, değerlendirdik ve tek bir web uygulamasında birleştirdik.",
              ],
              [
                "We applied to the TÜBİTAK 2209-A University Students Research Projects Support Program in November 2024; the project was accepted for support in April 2025. I am the project lead.",
                "I carried out the graduation project together with Hayrunnisa Yılmaz, supervised by Asst. Prof. Fatma Akalın.",
                "With Python, scikit-learn, OpenCV, YOLOv9, Flask, Jinja2, and Plotly we trained and evaluated the models and brought them together in one web application.",
              ],
              [
                "Im November 2024 haben wir uns beim TÜBİTAK-2209-A-Programm zur Förderung studentischer Forschungsprojekte beworben; im April 2025 wurde das Projekt zur Förderung angenommen. Ich leite das Projekt.",
                "Die Abschlussarbeit habe ich gemeinsam mit Hayrunnisa Yılmaz unter Betreuung von Dr. Fatma Akalın durchgeführt.",
                "Mit Python, scikit-learn, OpenCV, YOLOv9, Flask, Jinja2 und Plotly haben wir die Modelle trainiert, bewertet und in einer Webanwendung zusammengeführt.",
              ],
            ),
          },
        ],
      },
    ],
  },

  /* ───────────────────────────── CVD filters ───────────────────────────── */
  {
    slug: "cvd-image-filters",
    sections: [
      {
        id: "problem",
        title: L("Problem", "Problem", "Problem"),
        blocks: [
          {
            type: "p",
            text: L(
              "Renk görme farklılığı olan bireyler, dijital görüntülerdeki bazı renkleri birbirinden ayırt edemez; örneğin Ishihara test plakalarındaki sayıları göremezler. Bir filtrenin işe yarayıp yaramadığını ölçmek de çoğu zaman insan yorumuna bırakılır.",
              "People with color vision deficiency cannot tell certain colors apart in digital images; for example, they can't see the numbers on Ishihara test plates. Whether a filter helps is also often left to human judgment.",
              "Menschen mit Farbsehschwäche können bestimmte Farben in digitalen Bildern nicht unterscheiden; zum Beispiel erkennen sie die Zahlen auf Ishihara-Tafeln nicht. Ob ein Filter hilft, wird zudem oft dem menschlichen Urteil überlassen.",
            ),
          },
        ],
      },
      {
        id: "approach",
        title: L("Yaklaşım", "Approach", "Ansatz"),
        blocks: [
          {
            type: "p",
            text: L(
              "İki çalışmada, görüntüleri yedi farklı renk görme tipi için daha algılanabilir hale getiren özgün filtreler tasarladık. Değerlendirme insandan bağımsızdır: orijinal ve filtrelenmiş görüntülerin, ilgili renk görme tipine sahip bir bireye nasıl göründüğü simüle edilir; bu simülasyon çıktıları MobileNet transfer öğrenme modeliyle sınıflandırılır.",
              "In two studies we designed original filters that make images easier to perceive for seven types of color vision deficiency. The evaluation is independent of human judgment: we simulate how the original and filtered images appear to a person with each type, and classify these simulations with a MobileNet transfer learning model.",
              "In zwei Studien haben wir eigene Filter entworfen, die Bilder für sieben Arten von Farbsehschwäche besser wahrnehmbar machen. Die Bewertung ist unabhängig vom menschlichen Urteil: Wir simulieren, wie Original- und gefilterte Bilder für die jeweilige Form wirken, und klassifizieren diese Simulationen mit einem MobileNet-Transfer-Learning-Modell.",
            ),
          },
          {
            type: "list",
            items: LL(
              [
                "Veri: Kaggle'daki Ishihara Blind Test Cards veri seti.",
                "Symmetry çalışması: beş filtre sürümü; daltonizasyon (RGB → LMS) ve normalizasyon, doygunluk ve renk tonu kaydırma, Fourier tabanlı yaklaşım ve kanal bazlı Prewitt kenar tespiti adım adım birleştirildi. Değerlendirme MobileNetV1 ile.",
                "Concurrency and Computation çalışması: üç aşamalı özgün filtre; değerlendirme MobileNetV2 ile.",
              ],
              [
                "Data: the Ishihara Blind Test Cards dataset on Kaggle.",
                "Symmetry study: five filter versions that combine, step by step, daltonization (RGB → LMS) with normalization, saturation and hue shifting, a Fourier-based approach, and per-channel Prewitt edge detection. Evaluated with MobileNetV1.",
                "Concurrency and Computation study: a three-stage original filter, evaluated with MobileNetV2.",
              ],
              [
                "Daten: der Datensatz Ishihara Blind Test Cards auf Kaggle.",
                "Symmetry-Studie: fünf Filterversionen, die schrittweise Daltonisierung (RGB → LMS) mit Normalisierung, Sättigungs- und Farbtonverschiebung, einen Fourier-basierten Ansatz und kanalweise Prewitt-Kantenerkennung kombinieren. Bewertet mit MobileNetV1.",
                "Studie in Concurrency and Computation: ein dreistufiger eigener Filter, bewertet mit MobileNetV2.",
              ],
            ),
          },
        ],
      },
      {
        id: "filters",
        title: L("Filtreler", "The filters", "Die Filter"),
        blocks: [
          {
            type: "steps",
            items: [
              plate("sym-step-0", 148, 148, L("Orijinal", "Original", "Original")),
              plate("sym-step-1", 155, 154, L("Daltonizasyon ve normalizasyon", "Daltonization and normalization", "Daltonisierung und Normalisierung")),
              plate("sym-step-2", 152, 154, L("BGR → RGB", "BGR → RGB", "BGR → RGB")),
              plate("sym-step-3", 155, 154, L("Doygunluk ve parlaklık", "Saturation and brightness", "Sättigung und Helligkeit")),
              plate("sym-step-4", 155, 154, L("Renk tonu kaydırma (HSV)", "Hue shift (HSV)", "Farbtonverschiebung (HSV)")),
              plate("sym-step-5", 148, 147, L("Fourier uzayında Prewitt", "Prewitt in the Fourier domain", "Prewitt im Fourier-Raum")),
              plate("sym-step-6", 147, 145, L("Kontrast ve parlaklık", "Contrast and brightness", "Kontrast und Helligkeit")),
            ],
            caption: L("5. filtre sürümü — Symmetry 2025", "Filter Version 5 — Symmetry 2025", "Filterversion 5 — Symmetry 2025"),
          },
          {
            type: "steps",
            items: [
              plate("cpe-step-0", 161, 162, L("Orijinal", "Original", "Original")),
              plate("cpe-step-1", 162, 162, L("Normalizasyon ve daltonizasyon", "Normalization and daltonization", "Normalisierung und Daltonisierung")),
              plate("cpe-step-2", 169, 168, L("Kaydırma filtresi ve doygunluk", "Shifting filter and saturation", "Verschiebungsfilter und Sättigung")),
            ],
            caption: L(
              "Üç aşamalı filtre — Concurrency and Computation 2025",
              "Three-stage filter — Concurrency and Computation 2025",
              "Dreistufiger Filter — Concurrency and Computation 2025",
            ),
          },
        ],
      },
      {
        id: "results",
        title: L("Sonuçlar", "Results", "Ergebnisse"),
        blocks: [
          {
            type: "metrics",
            items: [
              { value: L("%33,95", "33.95%", "33,95 %"), label: L("Orijinal görüntüler · ortalama F1", "Original images · mean F1", "Originalbilder · mittlerer F1") },
              { value: L("%90,31", "90.31%", "90,31 %"), label: L("5. filtre sürümü · ortalama F1", "Filter Version 5 · mean F1", "Filterversion 5 · mittlerer F1") },
            ],
            note: L(
              "Yedi renk görme tipinin ortalaması, test seti, MobileNetV1 ile değerlendirme. Ortalama, Symmetry 2025 makalesindeki Tablo 8'den hesaplanmıştır.",
              "Mean across seven types of color vision deficiency, test set, evaluated with MobileNetV1. The mean is computed from Table 8 of the Symmetry 2025 paper.",
              "Mittelwert über sieben Arten von Farbsehschwäche, Testdatensatz, bewertet mit MobileNetV1. Der Mittelwert ist aus Tabelle 8 des Symmetry-Artikels (2025) berechnet.",
            ),
          },
          {
            type: "p",
            text: L(
              "Concurrency and Computation çalışmasında da sınıflandırma sonuçları, önerilen filtrelerin yedi renk görme tipinin her birinde görsel algıyı iyileştirdiğini gösterdi.",
              "In the Concurrency and Computation study, the classification results likewise showed that the proposed filters improve visual perception for each of the seven types.",
              "Auch in der Studie in Concurrency and Computation zeigten die Klassifikationsergebnisse, dass die Filter die Wahrnehmung bei allen sieben Formen verbessern.",
            ),
          },
        ],
      },
      {
        id: "contribution",
        title: L("Katkım", "My contribution", "Mein Beitrag"),
        blocks: [
          {
            type: "p",
            text: L(
              "Symmetry makalesindeki yazar katkı beyanına göre yöntem, yazılım, doğrulama, analiz, araştırma, veri düzenleme, yazım ve görselleştirmede yer aldım. Concurrency and Computation makalesini Dr. Öğr. Üyesi Fatma Akalın ile birlikte yazdık.",
              "According to the author contribution statement of the Symmetry paper, I worked on methodology, software, validation, formal analysis, investigation, data curation, writing, and visualization. I co-authored the Concurrency and Computation paper with Asst. Prof. Fatma Akalın.",
              "Laut Beitragserklärung des Symmetry-Artikels war ich an Methodik, Software, Validierung, Analyse, Untersuchung, Datenaufbereitung, Schreiben und Visualisierung beteiligt. Den Artikel in Concurrency and Computation habe ich gemeinsam mit Dr. Fatma Akalın verfasst.",
            ),
          },
        ],
      },
    ],
  },

  /* ───────────────────────────── ElectricMotor ───────────────────────────── */
  {
    slug: "electricmotor",
    sections: [
      {
        id: "brief",
        title: L("İhtiyaç", "The brief", "Die Aufgabe"),
        blocks: [
          {
            type: "p",
            text: L(
              "Sharjah'ta (BAE) Tesla araçlarına bakım ve onarım hizmeti veren bağımsız bir servis merkezi, hizmetlerini anlatan ve müşterinin kolayca randevu talebi bırakabileceği bir web sitesine ihtiyaç duyuyordu.",
              "An independent service center in Sharjah (UAE) that maintains and repairs Tesla vehicles needed a website that explains its services and lets customers easily request an appointment.",
              "Ein unabhängiges Servicezentrum in Sharjah (VAE), das Tesla-Fahrzeuge wartet und repariert, brauchte eine Website, die die Leistungen erklärt und Kunden einfach einen Termin anfragen lässt.",
            ),
          },
        ],
      },
      {
        id: "structure",
        title: L("Bilgi mimarisi ve deneyim", "Information architecture and UX", "Informationsarchitektur und UX"),
        blocks: [
          {
            type: "list",
            items: LL(
              [
                "Ana sayfa: model seçici (Model S, 3, X, Y, Cybertruck), hizmet özetleri, süreç ve müşteri yorumları.",
                "Hizmetler sayfası: bakım, fren ve süspansiyon, klima ve soğutma, batarya ve şarj gibi başlıklara doğrudan bağlantılar.",
                "Dört adımlı \"nasıl çalışır\" akışı: randevudan teslimata kadar müşteriyi ne beklediği açık.",
                "İletişim akışı: ad, telefon, araç modeli ve sorun bilgisiyle randevu formu; telefon, e-posta, konum ve yol tarifi.",
                "Gizlilik: gizlilik politikası ve çerez tercihleri; çerezler kullanıcı izin vermeden yerleştirilmez.",
              ],
              [
                "Home: model selector (Model S, 3, X, Y, Cybertruck), service highlights, process, and customer reviews.",
                "Services page with direct links to sections such as maintenance, brakes and suspension, AC and cooling, and battery and charging.",
                "A four-step \"how it works\" flow, so customers know what to expect from booking to delivery.",
                "Contact flow: a booking form for name, phone, vehicle model, and issue, plus phone, email, location, and directions.",
                "Privacy: a privacy policy and cookie preferences; cookies are only placed after consent.",
              ],
              [
                "Startseite: Modellauswahl (Model S, 3, X, Y, Cybertruck), Leistungsübersicht, Ablauf und Kundenbewertungen.",
                "Leistungsseite mit direkten Links zu Bereichen wie Wartung, Bremsen und Fahrwerk, Klima und Kühlung sowie Batterie und Laden.",
                "Ein vierstufiger „So funktioniert's“-Ablauf, damit Kunden wissen, was sie von der Buchung bis zur Übergabe erwartet.",
                "Kontaktablauf: Terminformular mit Name, Telefon, Fahrzeugmodell und Anliegen sowie Telefon, E-Mail, Standort und Anfahrt.",
                "Datenschutz: Datenschutzerklärung und Cookie-Einstellungen; Cookies werden erst nach Einwilligung gesetzt.",
              ],
            ),
          },
          {
            type: "image",
            image: {
              src: "/images/work/electricmotor/homepage.webp",
              width: 1440,
              height: 790,
              alt: L(
                "ElectricMotor ana sayfası: koyu zemin üzerinde kırmızı bir Tesla Roadster ve randevu butonu.",
                "ElectricMotor home page: a red Tesla Roadster on a dark background with a booking button.",
                "ElectricMotor-Startseite: ein roter Tesla Roadster auf dunklem Hintergrund mit Termin-Button.",
              ),
              caption: L("Ana sayfa", "Home page", "Startseite"),
            },
          },
        ],
      },
      {
        id: "build",
        title: L("Teknik yaklaşım", "Technical approach", "Technischer Ansatz"),
        blocks: [
          {
            type: "list",
            items: LL(
              [
                "Next.js, React ve TypeScript ile bileşen tabanlı yapı.",
                "Mobil ve masaüstüne uyumlu, responsive tasarım.",
                "SEO: sayfa başına metadata ve site haritası.",
                "Güvenlik değerlendirmeleri ve çerez onayı.",
              ],
              [
                "Component-based structure with Next.js, React, and TypeScript.",
                "Responsive design for mobile and desktop.",
                "SEO: per-page metadata and a sitemap.",
                "Security considerations and cookie consent.",
              ],
              [
                "Komponentenbasierter Aufbau mit Next.js, React und TypeScript.",
                "Responsives Design für Mobilgeräte und Desktop.",
                "SEO: Metadaten pro Seite und eine Sitemap.",
                "Sicherheitsaspekte und Cookie-Einwilligung.",
              ],
            ),
          },
          {
            type: "callout",
            text: L(
              "Site bir bilgi ve randevu talebi sitesidir; online ödeme, mağaza veya müşteri hesabı içermez.",
              "The site is for information and appointment requests; it has no online payments, shop, or customer accounts.",
              "Die Website dient Information und Terminanfragen; sie hat keine Online-Zahlung, keinen Shop und keine Kundenkonten.",
            ),
          },
        ],
      },
      {
        id: "launch",
        title: L("Yayına alma", "Launch", "Launch"),
        blocks: [
          {
            type: "p",
            text: L(
              "Tasarımdan geliştirmeye ve yayına almaya kadar tüm süreci tek başıma yürüttüm. Site Ağustos 2026'da Vercel üzerinden yayına alındı.",
              "I handled the whole process on my own, from design and development to launch. The site went live on Vercel in August 2026.",
              "Den gesamten Prozess von Design und Entwicklung bis zum Launch habe ich allein umgesetzt. Die Website ging im August 2026 auf Vercel live.",
            ),
          },
        ],
      },
    ],
  },

  /* ───────────────────────────── Dokar Zemin ───────────────────────────── */
  {
    slug: "dokar-zemin",
    updated: L("Ekim 2026", "October 2026", "Oktober 2026"),
    sections: [
      {
        id: "context",
        title: L("Bağlam", "Context", "Kontext"),
        blocks: [
          {
            type: "p",
            text: L(
              "Dokar Zemin; fore kazık, ankraj ve deep soil mixing uygulamaları yapan bir zemin iyileştirme firması. Firma için yeni bir kurumsal web sitesi tasarlıyorum; mevcut yayındaki site benim çalışmam değil.",
              "Dokar Zemin is a ground improvement company working with bored piles, anchors, and deep soil mixing. I'm designing a new corporate website for them; the site currently online is not my work.",
              "Dokar Zemin ist ein Unternehmen für Baugrundverbesserung (Bohrpfähle, Anker, Deep Soil Mixing). Ich gestalte eine neue Unternehmenswebsite; die derzeit veröffentlichte Seite stammt nicht von mir.",
            ),
          },
          {
            type: "image",
            image: {
              src: "/images/work/dokar-zemin/homepage.webp",
              width: 1896,
              height: 872,
              alt: L(
                "Dokar Zemin ana sayfa tasarımı: şantiyedeki fore kazık makineleri üzerinde \"Zemin İyileştirme Sistemleri\" başlığı ve iki buton.",
                "Dokar Zemin home page design: the headline \"Zemin İyileştirme Sistemleri\" over piling rigs on a site, with two buttons.",
                "Dokar-Zemin-Startseitendesign: die Überschrift „Zemin İyileştirme Sistemleri“ über Bohrgeräten auf einer Baustelle, mit zwei Buttons.",
              ),
              caption: L("Ana sayfa tasarımı (taslak)", "Home page design (draft)", "Startseitendesign (Entwurf)"),
            },
          },
        ],
      },
      {
        id: "focus",
        title: L("Odak noktaları", "Focus areas", "Schwerpunkte"),
        blocks: [
          {
            type: "list",
            items: LL(
              [
                "Modern ve premium bir görsel dil; marka kimliğinin dijitale aktarılması.",
                "Bilgi mimarisi: kurumsal, faaliyet alanları, projeler, makine parkı, referanslar, galeri ve iletişim.",
                "Dil seçicili gezinme.",
                "Hosting ve yayına alma seçimi; güvenlik, istikrar ve bakım kolaylığı.",
                "SEO ve performans.",
              ],
              [
                "A modern, premium visual language that carries the brand identity online.",
                "Information architecture: company, fields of activity, projects, machine park, references, gallery, and contact.",
                "Navigation with a language switcher.",
                "Choice of hosting and deployment; security, stability, and ease of maintenance.",
                "SEO and performance.",
              ],
              [
                "Eine moderne, hochwertige Bildsprache, die die Markenidentität digital überträgt.",
                "Informationsarchitektur: Unternehmen, Tätigkeitsbereiche, Projekte, Maschinenpark, Referenzen, Galerie und Kontakt.",
                "Navigation mit Sprachumschalter.",
                "Wahl von Hosting und Deployment; Sicherheit, Stabilität und Wartbarkeit.",
                "SEO und Performance.",
              ],
            ),
          },
        ],
      },
    ],
  },

  /* ───────────────────────────── TEKNOFEST ───────────────────────────── */
  {
    slug: "teknofest-blood-cell",
    sections: [
      {
        id: "overview",
        title: L("Genel bakış", "Overview", "Überblick"),
        blocks: [
          {
            type: "p",
            text: L(
              "TEKNOFEST 2025'te SAÜ INWO takımıyla, kan hücresi görüntülerinden kanser tespitine yönelik bir öğrenci projesi geliştirdik. Proje yarı final aşamasına ulaştı.",
              "At TEKNOFEST 2025, team SAÜ INWO developed a student project on cancer detection from blood cell images. The project reached the semi-finals.",
              "Beim TEKNOFEST 2025 hat das Team SAÜ INWO ein Studierendenprojekt zur Krebserkennung aus Blutzellbildern entwickelt. Das Projekt erreichte das Halbfinale.",
            ),
          },
          {
            type: "p",
            text: L(
              "Takımın yürütücüsüydüm; ekipte Esma Kara ve Hayrunnisa Yılmaz vardı. Benim odağım, görüntüleri modele hazırlayan özgün bir görüntü işleme filtresi geliştirmekti.",
              "I led the team, together with Esma Kara and Hayrunnisa Yılmaz. My focus was developing an original image processing filter that prepares the images for the model.",
              "Ich habe das Team geleitet, gemeinsam mit Esma Kara und Hayrunnisa Yılmaz. Mein Schwerpunkt war ein eigener Bildverarbeitungsfilter, der die Bilder für das Modell vorbereitet.",
            ),
          },
          {
            type: "callout",
            text: L(
              "Bu bir yarışma projesidir; klinik olarak doğrulanmış bir tanı sistemi değildir.",
              "This is a competition project, not a clinically validated diagnostic system.",
              "Dies ist ein Wettbewerbsprojekt und kein klinisch validiertes Diagnosesystem.",
            ),
          },
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

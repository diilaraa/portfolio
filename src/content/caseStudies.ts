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
        id: "clinical",
        title: L("Klinik veri tahmin modülü", "Clinical prediction module", "Klinisches Vorhersagemodul"),
        blocks: [
          {
            type: "p",
            text: L(
              "Klinik analiz modülünde, farklı kaynaklardan elde edilen iki veri seti üzerinde çalıştık:",
              "In the clinical analysis module we worked with two datasets from different sources:",
              "Im klinischen Analysemodul haben wir mit zwei Datensätzen aus verschiedenen Quellen gearbeitet:",
            ),
          },
          {
            type: "list",
            items: LL(
              [
                "Kaggle'dan alınan 25.000 gözlemli Monkey-Pox Patients veri seti.",
                "GitHub'dan alınan 211 gözlemli MonkeyPoxDetection veri seti.",
                "Veri setleri üzerinde keşifçi veri analizi (EDA) yapıldı ve veriler temizlendi.",
              ],
              [
                "The Monkey-Pox Patients dataset from Kaggle, with 25,000 observations.",
                "The MonkeyPoxDetection dataset from GitHub, with 211 observations.",
                "We ran exploratory data analysis (EDA) on the datasets and cleaned the data.",
              ],
              [
                "Der Monkey-Pox-Patients-Datensatz von Kaggle mit 25.000 Beobachtungen.",
                "Der MonkeyPoxDetection-Datensatz von GitHub mit 211 Beobachtungen.",
                "Auf den Datensätzen haben wir eine explorative Datenanalyse (EDA) durchgeführt und die Daten bereinigt.",
              ],
            ),
          },
          {
            type: "p",
            text: L(
              "İki veri seti için farklı topluluk öğrenmesi yaklaşımları geliştirdik:",
              "We developed a different ensemble learning approach for each dataset:",
              "Für die beiden Datensätze haben wir unterschiedliche Ensemble-Ansätze entwickelt:",
            ),
          },
          {
            type: "list",
            items: LL(
              [
                "Stacking Ensemble: SVM ve Random Forest modellerinin çıktıları, Gradient Boosting meta-öğrenicisiyle birleştirildi.",
                "Weighted Voting Classifier: SVM, Lojistik Regresyon, CatBoost, XGBoost, Naive Bayes ve Random Forest modelleri ağırlıklı oylama yöntemiyle bir araya getirildi.",
              ],
              [
                "Stacking Ensemble: the outputs of SVM and Random Forest models were combined by a Gradient Boosting meta-learner.",
                "Weighted Voting Classifier: SVM, Logistic Regression, CatBoost, XGBoost, Naive Bayes, and Random Forest models were combined by weighted voting.",
              ],
              [
                "Stacking Ensemble: Die Ausgaben von SVM- und Random-Forest-Modellen wurden durch einen Gradient-Boosting-Meta-Learner kombiniert.",
                "Weighted Voting Classifier: SVM, logistische Regression, CatBoost, XGBoost, Naive Bayes und Random Forest wurden per gewichteter Abstimmung zusammengeführt.",
              ],
            ),
          },
          {
            type: "list",
            items: LL(
              [
                "Stacking modeli 0,79 F1 skoruna ulaştı.",
                "Weighted Voting modeli 0,64 karar eşiğiyle 0,91 F1 skoruna ulaştı.",
                "Voting modeli hasta sınıfında 0,90 recall değeri elde etti.",
              ],
              [
                "The stacking model reached an F1 score of 0.79.",
                "With a 0.64 decision threshold, the weighted voting model reached an F1 score of 0.91.",
                "The voting model achieved a recall of 0.90 for the patient class.",
              ],
              [
                "Das Stacking-Modell erreichte einen F1-Wert von 0,79.",
                "Das Weighted-Voting-Modell erreichte mit einem Entscheidungsschwellenwert von 0,64 einen F1-Wert von 0,91.",
                "Das Voting-Modell erzielte für die Klasse „erkrankt“ einen Recall von 0,90.",
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
        id: "image-analysis",
        title: L("Görüntü analizi modülü", "Image analysis module", "Bildanalysemodul"),
        blocks: [
          {
            type: "list",
            items: LL(
              [
                "İki farklı kaynaktan elde edilen deri lezyonu görüntülerini bir araya getirerek altı sınıflı bir veri seti oluşturduk: Monkeypox, Healthy, Cowpox, Chickenpox, HFMD ve Measles.",
                "Veri setini beş katlı çapraz doğrulama yaklaşımına göre düzenledik.",
                "Görüntülerde önceden tanımlanmış lezyon sınırları bulunmadığından, her görüntüyü bütünüyle kapsayan bir sınırlayıcı kutuyla etiketledik.",
                "Böylece modelin performansını görüntü düzeyinde precision, recall ve F1 metrikleriyle değerlendirdik.",
              ],
              [
                "We combined skin-lesion images from two different sources into a six-class dataset: Monkeypox, Healthy, Cowpox, Chickenpox, HFMD, and Measles.",
                "We organized the dataset for five-fold cross-validation.",
                "Since the images had no predefined lesion boundaries, we labeled each image with a bounding box covering the whole image.",
                "This let us evaluate the model at image level with precision, recall, and F1.",
              ],
              [
                "Wir haben Hautläsionsbilder aus zwei Quellen zu einem Datensatz mit sechs Klassen zusammengeführt: Monkeypox, Healthy, Cowpox, Chickenpox, HFMD und Measles.",
                "Den Datensatz haben wir für eine fünffache Kreuzvalidierung aufbereitet.",
                "Da die Bilder keine vordefinierten Läsionsgrenzen hatten, haben wir jedes Bild mit einer Bounding Box über das gesamte Bild annotiert.",
                "So haben wir das Modell auf Bildebene mit Precision, Recall und F1 bewertet.",
              ],
            ),
          },
        ],
      },
      {
        id: "filter",
        title: L("Görüntü işleme filtresi", "Image processing filter", "Bildverarbeitungsfilter"),
        blocks: [
          {
            type: "list",
            items: LL(
              [
                "Lezyon görüntülerindeki ayırt edici özellikleri belirginleştirmek amacıyla özgün bir görüntü işleme filtresi geliştirdik.",
                "Model eğitiminden ve tahmin aşamasından önce görüntülere uygulanan bu filtreyi farklı model yapılandırmalarıyla karşılaştırarak katkısını değerlendirdik.",
              ],
              [
                "We developed an original image processing filter to bring out the distinguishing features in lesion images.",
                "The filter is applied before training and before prediction; we assessed its contribution by comparing different model configurations.",
              ],
              [
                "Wir haben einen eigenen Bildverarbeitungsfilter entwickelt, der die unterscheidenden Merkmale in Läsionsbildern hervorhebt.",
                "Der Filter wird vor dem Training und vor der Vorhersage angewendet; seinen Beitrag haben wir durch den Vergleich verschiedener Modellkonfigurationen bewertet.",
              ],
            ),
          },
          {
            type: "image",
            image: mpoxImg(
              "filter-pipeline.webp",
              1851,
              679,
              L(
                "Özgün filtrenin adımları: orijinal görüntü, BGR'den Lab renk uzayına dönüşüm ve L kanalının ayrılması, db1 dalgacığıyla 2B ayrık dalgacık dönüşümü (LL, LH, HL, HH), LH, HL ve HH bileşenlerinin IDWT ile sentezlenerek keskinleştirilmesi, adaptif histogram eşitleme ve L kanalının renk kanallarıyla birleştirilmesiyle iyileştirilmiş görüntü.",
                "Steps of the original filter: original image, BGR to Lab conversion and isolation of the L channel, a 2D discrete wavelet transform with db1 (LL, LH, HL, HH), sharpening by synthesizing the LH, HL, and HH components with IDWT, adaptive histogram equalization, and the enhanced image after merging the L channel with the color channels.",
                "Schritte des eigenen Filters: Originalbild, Umwandlung von BGR nach Lab und Isolierung des L-Kanals, 2D-Wavelet-Transformation mit db1 (LL, LH, HL, HH), Schärfung durch Synthese der Komponenten LH, HL und HH per IDWT, adaptiver Histogrammausgleich und das verbesserte Bild nach Zusammenführung des L-Kanals mit den Farbkanälen.",
              ),
              L("Özgün görüntü işleme filtresinin adımları", "Steps of the original image processing filter", "Schritte des eigenen Bildverarbeitungsfilters"),
            ),
          },
        ],
      },
      {
        id: "training",
        title: L("Model eğitimi ve optimizasyon", "Model training and optimization", "Modelltraining und Optimierung"),
        blocks: [
          {
            type: "list",
            items: LL(
              [
                "YOLOv9 modelini beş katlı çapraz doğrulama kapsamında beş ayrı model olarak eğittik.",
                "Eğitim sürecinde AdamW ve MuSGD optimizasyon algoritmalarını karşılaştırdık.",
                "En iyi sonucu MuSGD ile gerçekleştirilen eğitim ve ardından uygulanan ince ayar aşamasında elde ettik.",
              ],
              [
                "We trained YOLOv9 as five separate models within five-fold cross-validation.",
                "During training we compared the AdamW and MuSGD optimizers.",
                "The best result came from training with MuSGD followed by a fine-tuning stage.",
              ],
              [
                "Wir haben YOLOv9 im Rahmen der fünffachen Kreuzvalidierung als fünf separate Modelle trainiert.",
                "Beim Training haben wir die Optimierer AdamW und MuSGD verglichen.",
                "Das beste Ergebnis lieferte das Training mit MuSGD und die anschließende Feinabstimmung.",
              ],
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
              "Görüntü modülü: altı sınıf, 5 katlı çapraz doğrulama ortalamaları",
              "Image module: six classes, 5-fold cross-validation averages",
              "Bildmodul: sechs Klassen, Mittelwerte der 5-fachen Kreuzvalidierung",
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
              "Sınıf bazlı değerler 5 katlı ortalamadır. Cowpox, Monkeypox ve Chickenpox ile benzerliği nedeniyle en zor ayrışan sınıf oldu.",
              "Per-class values are 5-fold averages. Cowpox was the hardest class to separate because of its similarity to Monkeypox and Chickenpox.",
              "Klassenwerte sind Mittelwerte über 5 Folds. Cowpox war wegen der Ähnlichkeit zu Monkeypox und Chickenpox am schwersten zu trennen.",
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
          {
            type: "image",
            image: mpoxImg(
              "epidemiology-charts.webp",
              1878,
              991,
              L(
                "Epidemiyoloji panelindeki altı grafik: doğrulanmış ve şüpheli vakaların koroplet haritası, en çok vaka görülen 10 ülkenin pasta grafiği, küresel günlük vaka eğilimi, ilk 10 ülkenin günlük vaka karşılaştırması, ithal ve yerel vakaları gösteren bulaş dinamikleri ve hastaneye yatış oranına göre hastalık şiddeti dağılımı.",
                "Six charts from the epidemiology dashboard: a choropleth map of confirmed and suspected cases, a pie chart of the 10 countries with the most cases, the global daily case trend, a daily case comparison of the top 10 countries, transmission dynamics of imported versus local cases, and disease severity by hospitalization rate.",
                "Sechs Diagramme des Epidemiologie-Dashboards: Choroplethenkarte bestätigter und Verdachtsfälle, Kreisdiagramm der 10 Länder mit den meisten Fällen, globaler täglicher Fallverlauf, Vergleich der täglichen Fälle der Top-10-Länder, Übertragungsdynamik importierter und lokaler Fälle sowie Krankheitsschwere nach Hospitalisierungsrate.",
              ),
              L("Epidemiyoloji grafikleri", "Epidemiology charts", "Epidemiologie-Diagramme"),
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
            caption: L("5 aşamalı hibrit filtre — Symmetry 2025", "Five-stage hybrid filter — Symmetry 2025", "Fünfstufiger hybrider Filter — Symmetry 2025"),
          },
          {
            type: "steps",
            items: [
              plate("cpe-step-0", 161, 162, L("Orijinal", "Original", "Original")),
              plate("cpe-step-1", 162, 162, L("Normalizasyon ve daltonizasyon", "Normalization and daltonization", "Normalisierung und Daltonisierung")),
              plate("cpe-step-2", 169, 168, L("Kaydırma filtresi ve doygunluk", "Shifting filter and saturation", "Verschiebungsfilter und Sättigung")),
            ],
            caption: L(
              "3 aşamalı hibrit filtre — Concurrency and Computation 2025",
              "Three-stage hybrid filter — Concurrency and Computation 2025",
              "Dreistufiger hybrider Filter — Concurrency and Computation 2025",
            ),
          },
        ],
      },
      {
        id: "results",
        title: L("Sonuçlar", "Results", "Ergebnisse"),
        blocks: [
          {
            type: "p",
            text: L(
              "Geliştirilen hibrit filtreler, yedi farklı renk görme tipine yönelik görüntülerin MobileNetV1 tarafından sınıflandırılmasında belirgin bir performans artışı sağladı.",
              "The hybrid filters we developed clearly improved how MobileNetV1 classified the images for all seven types of color vision deficiency.",
              "Die entwickelten hybriden Filter steigerten die Klassifikationsleistung von MobileNetV1 bei Bildern für sieben Arten von Farbsehschwäche deutlich.",
            ),
          },
          {
            type: "p",
            text: L(
              "Üç aşamalı hibrit filtre yaklaşımı, yedi renk görme tipinin tamamında MobileNetV2 ile yapılan sınıflandırma değerlendirmelerinde iyileşme sağladı.",
              "The three-stage hybrid filter approach improved the MobileNetV2 classification results for all seven types of color vision deficiency.",
              "Der dreistufige hybride Filteransatz verbesserte die Klassifikationsergebnisse mit MobileNetV2 bei allen sieben Arten von Farbsehschwäche.",
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
              src: "/images/work/electricmotor/home-hero.webp",
              width: 1897,
              height: 910,
              alt: L(
                "ElectricMotor ana sayfası: koyu zemin üzerinde kırmızı bir Tesla Roadster, hizmet sloganı ve randevu butonları.",
                "ElectricMotor home page: a red Tesla Roadster on a dark background with the service tagline and booking buttons.",
                "ElectricMotor-Startseite: ein roter Tesla Roadster auf dunklem Hintergrund mit Leistungsslogan und Termin-Buttons.",
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
    sections: [
      {
        id: "context",
        title: L("Bağlam", "Context", "Kontext"),
        blocks: [
          {
            type: "p",
            text: L(
              "Dokar Zemin; fore kazık, ankraj ve deep soil mixing uygulamaları yapan bir zemin iyileştirme firması. Firmanın kurumsal web sitesini tasarladım, geliştirdim ve dokarzemin.com.tr adresinde yayına aldım. Site Türkçe ve İngilizce olarak hizmet veriyor.",
              "Dokar Zemin is a ground improvement company working with bored piles, anchors, and deep soil mixing. I designed and built their corporate website and launched it at dokarzemin.com.tr. The site is available in Turkish and English.",
              "Dokar Zemin ist ein Unternehmen für Baugrundverbesserung (Bohrpfähle, Anker, Deep Soil Mixing). Ich habe die Unternehmenswebsite gestaltet, entwickelt und unter dokarzemin.com.tr veröffentlicht. Die Seite ist auf Türkisch und Englisch verfügbar.",
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
              caption: L("Ana sayfa", "Home page", "Startseite"),
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
                "Türkçe ve İngilizce için dil seçicili gezinme.",
                "Hosting ve yayına alma seçimi; güvenlik, istikrar ve bakım kolaylığı.",
                "SEO ve performans.",
              ],
              [
                "A modern, premium visual language that carries the brand identity online.",
                "Information architecture: company, fields of activity, projects, machine park, references, gallery, and contact.",
                "Navigation with a language switcher for Turkish and English.",
                "Choice of hosting and deployment; security, stability, and ease of maintenance.",
                "SEO and performance.",
              ],
              [
                "Eine moderne, hochwertige Bildsprache, die die Markenidentität digital überträgt.",
                "Informationsarchitektur: Unternehmen, Tätigkeitsbereiche, Projekte, Maschinenpark, Referenzen, Galerie und Kontakt.",
                "Navigation mit Sprachumschalter für Türkisch und Englisch.",
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
              "TEKNOFEST 2025 İnsanlık Yararına Teknoloji Yarışması'na Sağlık Teknolojileri kategorisinde, \"Sağlık çalışanlarına yönelik çözümler — yapay öğrenme uygulamaları ve karar destek sistemleri\" başlığıyla katıldık. Projemiz \"Kan Hücreleri Görüntülerinden Kanser Tespiti için Yapay Zekâ ve Web Tabanlı Klinik Karar Destek Sistemi\" yarı finale kaldı.",
              "We entered the TEKNOFEST 2025 Technology for the Benefit of Humanity competition in the Health Technologies category, under \"solutions for healthcare professionals — machine learning applications and decision support systems\". Our project, an AI and web-based clinical decision support system for cancer detection from blood cell images, reached the semi-finals.",
              "Wir nahmen am TEKNOFEST-2025-Wettbewerb „Technologie zum Wohl der Menschheit“ in der Kategorie Gesundheitstechnologien teil, Themenfeld „Lösungen für Gesundheitsfachkräfte – maschinelles Lernen und Entscheidungsunterstützung“. Unser Projekt, ein KI- und webbasiertes klinisches Entscheidungssystem zur Krebserkennung aus Blutzellbildern, erreichte das Halbfinale.",
            ),
          },
          {
            type: "p",
            text: L(
              "SAU InWo (Incredible Women), 2025'te üç arkadaşın kurduğu bir takım: Esma Kara, Hayrunnisa Yılmaz ve takım kaptanı olarak ben. Danışmanımız Dr. Öğr. Üyesi Fatma Akalın'dı. Takım logomuzu Esma tasarladı.",
              "SAU InWo (Incredible Women) is a team founded in 2025 by three friends: Esma Kara, Hayrunnisa Yılmaz, and me as team captain. Our advisor was Asst. Prof. Fatma Akalın. Esma designed our team logo.",
              "SAU InWo (Incredible Women) ist ein Team, das 2025 von drei Freundinnen gegründet wurde: Esma Kara, Hayrunnisa Yılmaz und mir als Teamkapitänin. Unsere Betreuerin war Dr. Fatma Akalın. Esma hat unser Teamlogo gestaltet.",
            ),
          },
        ],
      },
      {
        id: "problem",
        title: L("Problem", "Problem", "Problem"),
        blocks: [
          {
            type: "p",
            text: L(
              "Akut Lenfoblastik Lösemi (ALL), kemik iliğinde olgunlaşmamış lenfositlerin (blast hücrelerinin) kontrolsüz çoğalmasıyla ortaya çıkan ciddi bir kanser türü. Tanıda kullanılan periferik kan yayması mikroskop altında elle incelenir; bu süreç zaman alır, uzmanın deneyimine göre değişebilir ve iş yükü nedeniyle gecikmelere yol açabilir.",
              "Acute Lymphoblastic Leukemia (ALL) is a serious cancer in which immature lymphocytes (blast cells) multiply uncontrollably in the bone marrow. Diagnosis relies on peripheral blood smears examined by hand under a microscope, which is slow, depends on the expert's experience, and can be delayed by workload.",
              "Akute lymphatische Leukämie (ALL) ist eine schwere Krebserkrankung, bei der sich unreife Lymphozyten (Blasten) im Knochenmark unkontrolliert vermehren. Die Diagnose stützt sich auf Blutausstriche, die manuell unter dem Mikroskop untersucht werden – langsam, abhängig von der Erfahrung der Fachkraft und durch Arbeitslast verzögerbar.",
            ),
          },
        ],
      },
      {
        id: "method",
        title: L("Yöntem", "Method", "Methode"),
        blocks: [
          {
            type: "p",
            text: L(
              "Veri olarak Università degli Studi di Milano'nun ALL-IDB veri setini kullandık. Akışımız görüntü işleme, özellik çıkarımı ve sınıflandırmadan oluşuyor:",
              "We used the ALL-IDB dataset from the Università degli Studi di Milano. Our pipeline consists of image processing, feature extraction, and classification:",
              "Als Daten nutzten wir den ALL-IDB-Datensatz der Università degli Studi di Milano. Unsere Pipeline besteht aus Bildverarbeitung, Merkmalsextraktion und Klassifikation:",
            ),
          },
          {
            type: "list",
            items: LL(
              [
                "Ön işleme: yeniden boyutlandırma, normalizasyon, RGB'den HSV ve CIELab'a dönüşüm, medyan ve Gauss filtresiyle gürültü giderme, kontrast germe ve histogram eşitleme.",
                "Segmentasyon: HSV uzayında otomatik eşikleme (Zack / üçgen yöntemi), morfolojik işlemler, bitişik hücreler için Watershed ve her hücre için otomatik kırpma.",
                "Özellik çıkarımı: alan, çevre, eksantriklik, dairesellik ve çekirdek/sitoplazma oranı gibi geometrik özellikler; HSV, CMYK ve CIELab renk istatistikleri; GLCM ve Gabor filtresiyle doku özellikleri.",
                "Sınıflandırma ve arayüz: transfer öğrenme modelleri ve YOLOv9 ile blast hücre tespiti; sonuçların Flask tabanlı bir web arayüzünde gösterilmesi.",
              ],
              [
                "Preprocessing: resizing, normalization, RGB to HSV and CIELab conversion, median and Gaussian denoising, contrast stretching, and histogram equalization.",
                "Segmentation: automatic thresholding in HSV (Zack / triangle method), morphological operations, Watershed for touching cells, and automatic cropping of each cell.",
                "Feature extraction: geometric features such as area, perimeter, eccentricity, circularity, and nucleus/cytoplasm ratio; HSV, CMYK, and CIELab color statistics; texture features with GLCM and Gabor filters.",
                "Classification and interface: transfer learning models and YOLOv9 for blast cell detection, with results shown in a Flask-based web interface.",
              ],
              [
                "Vorverarbeitung: Skalierung, Normalisierung, Umwandlung von RGB nach HSV und CIELab, Entrauschen mit Median- und Gaußfilter, Kontraststreckung und Histogrammausgleich.",
                "Segmentierung: automatische Schwellenwertbildung im HSV-Raum (Zack-/Dreiecksverfahren), morphologische Operationen, Watershed für sich berührende Zellen und automatischer Zuschnitt jeder Zelle.",
                "Merkmalsextraktion: geometrische Merkmale wie Fläche, Umfang, Exzentrizität, Rundheit und Kern-Plasma-Verhältnis; Farbstatistiken in HSV, CMYK und CIELab; Texturmerkmale mit GLCM und Gabor-Filtern.",
                "Klassifikation und Oberfläche: Transfer-Learning-Modelle und YOLOv9 zur Blastenerkennung, Ergebnisse in einer Flask-basierten Weboberfläche.",
              ],
            ),
          },
          {
            type: "image",
            image: {
              src: "/images/work/teknofest-blood-cell/filter-pipeline.webp",
              width: 681,
              height: 326,
              alt: L(
                "Kan yayması görüntüsünün adım adım işlenmesi: orijinal görüntü, LAB uzayında CLAHE, HSV uzayında Gabor filtresi, bilateral filtre ve Watershed segmentasyonuyla çizilmiş hücre sınırları.",
                "Step-by-step processing of a blood smear image: original, CLAHE in LAB space, Gabor filter in HSV space, bilateral filter, and cell outlines from Watershed segmentation.",
                "Schrittweise Verarbeitung eines Blutausstrichs: Original, CLAHE im LAB-Raum, Gabor-Filter im HSV-Raum, bilateraler Filter und Zellkonturen aus der Watershed-Segmentierung.",
              ),
              caption: L(
                "Filtre ve segmentasyon akışı: CLAHE → Gabor → bilateral filtre → Watershed",
                "Filter and segmentation pipeline: CLAHE → Gabor → bilateral filter → Watershed",
                "Filter- und Segmentierungsablauf: CLAHE → Gabor → bilateraler Filter → Watershed",
              ),
            },
          },
        ],
      },
      {
        id: "prototype",
        title: L("Arayüz taslağı", "Interface draft", "Oberflächenentwurf"),
        blocks: [
          {
            type: "p",
            text: L(
              "Yarı final sunumunda, uzmanın görüntü yükleyip analiz sonucunu görebileceği Türkçe bir web arayüzü taslağı hazırladık. Hedefimiz, devlet hastanelerinde de kullanılabilecek ücretsiz ve erişilebilir bir karar destek aracıydı.",
              "For the semi-final presentation we drafted a Turkish web interface where a specialist can upload an image and see the analysis. Our goal was a free, accessible decision support tool that public hospitals could use too.",
              "Für die Halbfinal-Präsentation entwarfen wir eine türkischsprachige Weboberfläche, in der Fachkräfte ein Bild hochladen und die Analyse sehen können. Ziel war ein kostenloses, zugängliches Werkzeug, das auch staatliche Krankenhäuser nutzen können.",
            ),
          },
          {
            type: "image",
            image: {
              src: "/images/work/teknofest-blood-cell/ui-mockup.webp",
              width: 1160,
              height: 1093,
              alt: L(
                "Akut Lenfoblastik Lösemi görüntü analizi karar destek sistemi arayüz taslağı: görüntü yükleme, işlenmiş hücre görüntüleri, analiz butonu ve sonuç kutusu.",
                "Interface draft of the acute lymphoblastic leukemia image analysis tool: image upload, processed cell images, an analyze button, and a result box.",
                "Oberflächenentwurf des ALL-Bildanalysewerkzeugs: Bild-Upload, verarbeitete Zellbilder, Analyse-Button und Ergebnisfeld.",
              ),
              caption: L(
                "Arayüz taslağı (yarı final sunumu); sonuç kutusundaki değer örnektir.",
                "Interface draft (semi-final presentation); the value in the result box is a placeholder.",
                "Oberflächenentwurf (Halbfinal-Präsentation); der Wert im Ergebnisfeld ist ein Platzhalter.",
              ),
            },
          },
        ],
      },
      {
        id: "role",
        title: L("Rolüm", "My role", "Meine Rolle"),
        blocks: [
          {
            type: "p",
            text: L(
              "Takım kaptanıydım. Görev dağılımımızda üçümüz de görüntü işleme teknikleriyle filtre tasarımı, model eğitimi ve entegrasyon üzerinde çalıştık; benim odağım görüntüleri modele hazırlayan özgün görüntü işleme filtresinin geliştirilmesiydi.",
              "I was the team captain. In our task split all three of us worked on filter design with image processing, model training, and integration; my focus was developing the original image processing filter that prepares the images for the model.",
              "Ich war Teamkapitänin. Laut Aufgabenverteilung arbeiteten wir alle drei an Filterdesign, Modelltraining und Integration; mein Schwerpunkt war der eigene Bildverarbeitungsfilter, der die Bilder für das Modell vorbereitet.",
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

# Dilara Top — Portfolyo: Aşama 3 Planı

Onaylanan yön: **Konsept C — "Translator"** (premium kişisel marka) + case study sayfalarında **Konsept A'nın editoryal düzeni**.
Site dilleri: **Türkçe (varsayılan)**, İngilizce ve Almanca — üçü de ilk sürümde. Dil seçici başlıkta.

---

## 1. Konumlandırma ve ses

- **Ana cümle (hero):** *I translate between business needs and working systems.*
- **Alt satır:** *Information Systems Engineer working across business analysis, product, and applied AI.*
- **Kanıt satırı:** Sakarya University · GPA 3.56/4.00 · 2 journal papers · TÜBİTAK 2209-A
- **Üç katman anlatısı** (sitenin omurgası):
  | Katman | Dil | Kanıt |
  |---|---|---|
  | Business | serif | Logo BA stajı, Mikro PM stajı, Kanzlei Heinrich |
  | Integration | serif + mono | e-Belge (UBL, XSD, Schematron, XSLT), REST/SOAP, Postman/SoapUI |
  | Code & data | mono | C#, React, Flask, YOLOv9, özgün filtreler |
- **Ton:** Kısa, somut, abartısız. "Passionate", "innovative" gibi dolgu kelimeler yok. Her iddia bir kaynağa (yayın, tez, canlı site) bağlanır.

---

## 2. Site haritası

```
/                         Home
/work                     Work — proje dizini (filtrelenebilir: Research · Product · Web)
/work/mpox-decision-support    ★ Amiral case study (tez + TÜBİTAK 2209-A)
/work/cvd-image-filters        ★ Araştırma projesi (2 yayın)
/work/electricmotor            Canlı müşteri sitesi
/work/dokar-zemin              Devam ediyor (status: in-progress)
/work/teknofest-blood-cell     Yarışma projesi (yarı final)
/research                 Research & Publications
/experience               Experience (stajlar + iş deneyimi, zaman çizelgesi)
/about                    About (eğitim, Almanya, diller, çalışma yaklaşımı)
/contact                  Contact
/404
```

Tüm rotalar `/[locale]/…` altında: `/tr`, `/en`, `/de`. `/` → `/tr` yönlendirmesi. Rota adresleri (slug) üç dilde ortak ve İngilizce kalır (`/tr/work/electricmotor`); arayüz metinleri ve içerik çevrilir. Her sayfada `hreflang` alternatifleri.

**Arşiv (Work sayfasının altında, kısa liste — onaylandı):** Pediatri Asistan Nöbet Yönetim Sistemi (ASP.NET MVC, EF, MSSQL) · Veritabanı Tasarımı (MSSQL, C#) · Gayrimenkul Veri Madenciliği · Unity Otonom Araç (A*, UCS, Greedy).

---

## 3. Sayfa yapıları

### 3.1 Home
1. **Hero (scroll intro)** — Önce "Merhaba, ben Dilara Top." ve ortada avatar; kaydırınca avatar sağa geçer, ana cümle, kanıt etiketleri, butonlar ve teknoloji logoları (simple-icons, `scripts/gen-tech-icons.mjs`) yerine oturur. Mobilde ve azaltılmış harekette statik. Ana cümle: "iş" pembe, "kod" mavi, alt satır, iki CTA: *View work* · *Read the research*. Sağ üstte **CVD lens** anahtarı.
2. ~~Three layers~~ — Dilara'nın isteğiyle kaldırıldı.
3. **Selected work** — 3 öne çıkan kart (Mpox, CVD filtreleri, ElectricMotor); asimetrik editoryal ızgara, büyük görsel + mono meta satırı.
4. **Research highlight** — "33.95% → 90.31%" büyük sayı + bağlam dipnotu (aşağıda §6), iki yayının künyesi.
5. **Experience snapshot** — 4 satırlık yatay zaman çizgisi (2019 Münih → 2026 Logo BA).
6. **Contact CTA** — "Open to Business Analyst, Product and software roles." + e-posta, LinkedIn, GitHub.

### 3.2 Case study şablonu (editoryal, Konsept A disiplini)
Sol dar sütunda yapışkan içindekiler + meta; sağda 68ch okuma genişliği.

- **Meta bloğu:** Role · Period · Team · Stack · Status · Links
- **Bölümler** (projeye göre seçilir): Summary → Problem → Approach → Architecture (diyagram) → Data & process → Evaluation → Results → Limitations → My contribution → What's next
- Dipnot tarzı kaynak gösterimi (tez tablo no., makale tablo no.)
- Sayfa sonunda önceki/sonraki proje

**Mpox (amiral) — özel bileşenler:**
- Mimari diyagram: Klinik modül (Voting + Stacking, kural motoru) · Görüntü modülü (özgün filtre → 5-fold YOLOv9 ensemble, %45 güven eşiği, çoğunluk oyu) · Epidemiyoloji paneli (Plotly) → Flask + Jinja2
- Filtre akışı: BGR→CIELAB → L kanalına db1 2D-DWT, detay katsayıları güçlendirme → IDWT → CLAHE → BGR
- **Önce/sonra kaydırıcı** (tezdeki filtre görselleri)
- Sonuç basamakları: F1 0.7666 → 0.8548 (filtre) → 0.8753 (MuSGD) → 0.8999 (fine-tune); Monkeypox sınıfı F1 0.9086
- **Sınırlılıklar** bölümü zorunlu: araştırma prototipi; kamuya açık veri; prospektif klinik doğrulama yok; tam görüntü bbox → görüntü düzeyinde sınıflandırma; klinik modelde sağlıklı sınıf recall 0.40
- Sayfa başında kalıcı not: *Research prototype — not a validated diagnostic tool.*
- Ortak çalışma: Hayrunnisa Yılmaz (ortak yazar), danışman Dr. Öğr. Üyesi Fatma Akalın

**CVD filtreleri:** 5 filtre sürümünün evrimi (Daltonization+normalizasyon → saturation/shifting → hibrit → Fourier → Prewitt + kanal ağırlıklandırma), 7 CVD tipi tablosu (Tablo 8'den, test seti), CRediT katkı rozetleri.

**ElectricMotor:** Brief → bilgi mimarisi → tasarım kararları → teknik yaklaşım (Next.js, TS, responsive, SEO/sitemap, güvenlik başlıkları) → canlıya alma (Vercel, Ağustos 2026). E-ticaret/ödeme/müşteri DB *yok* — açıkça yazılmaz da, ima da edilmez.

**Dokar Zemin:** Zemin iyileştirme firması (fore kazık, ankraj, deep soil mixing) için kurumsal site — *epoksi zemin kaplama değil*. Tasarım tamamen Dilara'ya ait. "In progress" rozeti, ana ekran görseli, hedefler (marka, mimari, hosting kararı, SEO/performans), "Last updated" tarihi. Canlı dokarzemin.com.tr bağlantısı **verilmez** (mevcut site onun işi değil).

### 3.3 Research
Her yayın için kart: resmi başlık · yazarlar (adınız vurgulu) · dergi/cilt/sayı/tarih · amaç · yöntem · katkınız · DOI butonu · BibTeX kopyala. Altta "Research threads": özgün filtre tasarımı üç projede (CVD, Mpox, TEKNOFEST).

### 3.4 Experience
Ters kronolojik. Her rol: **Context → What I did → What it connected to.**
- Logo — Business Analyst Intern (Şub–May 2026): e-Belge özel entegratör ürünü; fonksiyonel analiz dokümanları ve mockup'lar; Postman/SoapUI ile API doğrulama; UBL/XSD/Schematron/XSLT; Jira, Confluence, Lucidchart; Agile. *(Mockup gösterilmez.)*
- Mikro — Product Management Intern (Ağu–Eyl 2025): PO desteği, sprint planlama, backlog önceliklendirme, sürüm duyuruları.
- Logo — Software Development Intern (Tem–Ağu 2025): e-Fatura entegratörü; C# backend, React frontend, MongoDB'deki video içeriklerine erişim, SQL sorguları, REST/SOAP, Postman/SoapUI, Jira.
- Kanzlei Heinrich, Münih — Accounting Office (Kas 2019–Tem 2021): gelir/gider kayıtları, günlük operasyonlar; veri doğruluğu ve kayıt disiplini.

### 3.5 About
Kısa hikâye (Almanya'da lise + iş deneyimi → BSM → iş ile kod arasında köprü), eğitim (Sakarya Ü., Fachoberschule Holzkirchen, Realschule Taufkirchen), diller (TR ana dil, DE C1, EN B2), yetkinlikler (§5), avatar.

### 3.6 Contact
E-posta (dilaratop02@gmail.com — görünür, onaylandı), LinkedIn, GitHub, konum "Kocaeli, Türkiye", İngilizce CV indirme. **Telefon yok, form yok.** Not: mevcut CV PDF'inde telefon numarası var; sitede telefonsuz bir sürüm kullanılmalı.

---

## 4. Tasarım sistemi

### 4.1 Renk (revize 2: beyaz zemin, siyah · mavi · pembe — yalnız açık tema)
| Token | Değer | Kullanım | Kontrast (beyaz üzerinde) |
|---|---|---|---|
| `--paper` | `#FFFFFF` | Sayfa zemini, kartlar | — |
| `--band-gray` | `#F6F6F8` | Çalışmalar bandı | — |
| `--band-blue` | `#EEF1FB` | Araştırma bandı, etiketler | — |
| `--band-pink` | `#FCEEF3` | Hero kanıt etiketleri | — |
| `--ink` | `#121212` | Ana metin, koyu bloklar | 18.7:1 |
| `--ink-muted` | `#52525B` | İkincil metin | 7.7:1 |
| `--pink` | `#C2185B` | Vurgu, CTA hover | 5.9:1 |
| `--blue` | `#2340D0` | Bağlantılar, DOI butonları | 7.7:1 |

Tüm metin renkleri bant zeminlerinde de ≥ 5.2:1.

### 4.2 Tipografi (revize 2)
- **Bricolage Grotesque** (600, -0.03em) — başlıklar
- **Manrope** — gövde, arayüz ve etiketler
- Monospace font kullanılmıyor (Dilara'nın isteği).

### 4.3 Düzen
- 12 sütun ızgara, maks. 1240px, kenar boşluğu mobilde 20px / masaüstünde 40px
- 4px taban aralık; bölümler arası `clamp(5rem, 12vw, 10rem)`
- Asimetrik editoryal yerleşim (ör. 5/7, 4/8 bölünmeler); kartlarda 4px köşe — "SaaS kartı" görünümünden kaçınma

### 4.4 Hareket
- Süreler 180ms (hover) / 420ms (giriş); `cubic-bezier(.2,.7,.2,1)`
- Giriş: opaklık + 8px kaydırma, IntersectionObserver ile, bir kez
- Bağlantı alt çizgisi soldan dolma; kart görselinde 1.02 ölçek
- `prefers-reduced-motion` → tüm hareket kapalı. Animasyon kütüphanesi yok (CSS + küçük hook).

### 4.5 İmza öğeleri
1. **CVD lens:** Başlıkta anahtar → Normal · Deuteranopia · Protanopia · Tritanopia · Achromatopsia. SVG `feColorMatrix` (Machado et al., 2009 matrisleri) `<html>`'e uygulanır; seçim `localStorage`'da; klavye erişimli; kısa açıklama + araştırmanıza bağlantı.
2. **Before/after slider:** Erişilebilir (ok tuşları, `role="slider"`), filtre çıktıları için.
3. **Metric callout:** Büyük mono sayı + zorunlu bağlam dipnotu (veri seti, model, tablo no.).

### 4.6 Bileşen envanteri
`SiteHeader` · `SiteFooter` · `LensToggle` · `LocaleSwitch` (gizli, TR gelince) · `Container` · `Section` · `Eyebrow` · `Button`/`LinkButton` · `ProjectCard` · `StatusBadge` · `MetaList` · `CaseStudyLayout` · `TableOfContents` · `Footnote` · `MetricCallout` · `CompareSlider` · `Figure` · `ArchitectureDiagram` (inline SVG) · `PublicationCard` · `Timeline` · `SkillGroup` · `Reveal`

### 4.7 Yetkinlikler (etiket duvarı yok, yüzde yok)
Dört grup; her grupta 1 cümle "nerede kullandım" + araçlar düz metin, kullanıldığı projeye bağlantı:
- Programming & web — Python, C#, C++, HTML, CSS, React, Next.js, Flask
- AI & data — OpenCV, NumPy, scikit-learn, YOLOv9, ML, image processing, Power BI
- Databases & integration — MSSQL, ADO.NET, REST, SOAP
- Analysis & collaboration — Jira, Confluence, Postman, SoapUI, Excel, Lucidchart, Odoo ERP

---

## 5. Teknik mimari

### 5.1 Yığın
| Karar | Seçim | Gerekçe |
|---|---|---|
| Framework | Next.js (App Router, güncel kararlı sürüm; kurulumda sabitlenir) | İsteğiniz; SSG + metadata API |
| Dil | TypeScript `strict` | Sürdürülebilirlik |
| Stil | Tailwind CSS v4 (`@theme` ile token'lar) | İsteğiniz; token'lar tek yerde |
| İçerik | Tipli TS içerik dosyaları (`content/en/*.ts`) | Ek bağımlılık yok, derleme anında doğrulama, i18n kolay |
| i18n | `app/[locale]` (tr · en · de) + sözlük dosyaları | Kütüphanesiz; içerik `content/{tr,en,de}` |
| Görsel | `next/image` (AVIF/WebP) | Performans |
| OG | `next/og` ile sayfa başına otomatik görsel | Paylaşım kalitesi |
| Hosting | Vercel Hobby (ücretsiz), `*.vercel.app` | ElectricMotor'da zaten deneyiminiz var |
| Çalışma bağımlılığı | `next`, `react`, `react-dom` dışında **yok** | Gereksiz bağımlılıktan kaçınma |

### 5.2 Klasör yapısı
```
src/
  app/
    [locale]/
      layout.tsx  page.tsx
      work/page.tsx  work/[slug]/page.tsx
      research/  experience/  about/  contact/
      opengraph-image.tsx
    sitemap.ts  robots.ts  not-found.tsx  globals.css
  components/   (ui/, layout/, case-study/, home/)
  content/
    tr/ en/ de/  site.ts  projects.ts  publications.ts  experience.ts  skills.ts
    types.ts     ← tüm içerik tipleri (Project.status: 'live' | 'in-progress' | 'research' …)
  lib/  i18n.ts  seo.ts  cvd-matrices.ts
public/
  images/work/<slug>/…   cv/  (İngilizce CV gelirse)
docs/PLAN.md
```
Yeni proje eklemek / Dokar'ı güncellemek = `projects.ts`'te bir nesneyi düzenlemek.

### 5.3 SEO ve erişilebilirlik
- Metadata API: sayfa başına title/description/canonical/hreflang
- JSON-LD: `Person`, her yayın için `ScholarlyArticle`, case study'ler için `CreativeWork`
- `sitemap.ts`, `robots.ts`, OG + Twitter kartları
- Semantik HTML, atlama bağlantısı, görünür odak halkası, tüm görsellerde anlamlı `alt`, klavyeyle tam gezinme, 44px dokunma hedefleri

### 5.4 Güvenlik
- Tamamen statik; sunucu tarafı form/API yok, sır (secret) yok
- `next.config` başlıkları: CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `frame-ancestors 'none'`
- Dış bağlantılarda `rel="noopener noreferrer"`

### 5.5 Kalite hedefleri
Lighthouse (mobil) Performans ≥ 95, Erişilebilirlik 100, SEO 100 · LCP < 2.0s · CLS < 0.05 · İlk yükte JS minimum (lens ve slider dışında istemci bileşeni yok).

### 5.6 Git / GitHub
- `main` dalı; anlamlı, küçük commit'ler (her geliştirme adımı ayrı)
- Bu makinede **GitHub CLI (`gh`) kurulu değil** → iki seçenek: (a) `gh` kurulup giriş yapılır, depoyu ben oluştururum; (b) GitHub'da boş bir depo açarsınız, ben bağlayıp push ederim.

---

## 6. İçerik doğruluk kuralları

| İddia | Kaynak | Bağlam (zorunlu) |
|---|---|---|
| Symmetry: kırmızı renk körlüğünde F1 5.52% → 91.84% | Symmetry 2025, Tablo 8 | Sitede sayı verilmez (Dilara'nın tercihi); yalnızca "en belirgin iyileşme protanopide" denir. |
| F1 0.7666 → 0.8999 | Tez, Tablo 4.6–4.7 | 6 sınıf, 5-fold CV, YOLOv9, görüntü düzeyinde sınıflandırma |
| Monkeypox F1 0.9086 | Tez, Tablo 4.8 | 5-fold ortalama |
| CPE: monokromazide F1 5% → 90% | Revizyon sonrası el yazması, Tablo 4 | Sitede sayı verilmez; "en belirgin iyileşme monokromazide" denir. |
| Recall 0.90 (hasta) | Tez, Tablo 4.5 | Voting Classifier, eşik 0.64; sağlıklı sınıf recall 0.40 da belirtilir |

Görseller: Symmetry (MDPI, açık erişim) ve tez görselleri kaynak gösterilerek kullanılır. CPE (Wiley) görselleri telif nedeniyle **kullanılmaz**; yalnızca künye ve kendi anlatımımız.

---

## 6b. Proje künye bilgileri (onaylandı)

- **TÜBİTAK 2209-A:** Başvuru Kasım 2024, kabul Nisan 2025. Yürütücü: Dilara Top. Ortak yazar: Hayrunnisa Yılmaz. Danışman: Dr. Öğr. Üyesi Fatma Akalın.
- **TEKNOFEST 2025 — SAÜ INWO:** Yarı final. Ekip: Dilara Top (yürütücü), Esma Kara, Hayrunnisa Yılmaz.
- **ElectricMotor:** Tek başına tasarım ve geliştirme; Vercel üzerinde Ağustos 2026'da yayına alındı.

## 7. Aşama 4 — geliştirme sırası (her adım sonunda sizin onayınız)

1. **İskelet:** Next.js kurulumu, token'lar, fontlar, `[locale]` yapısı, header/footer, lens anahtarı → önizleme
2. **Home** → önizleme
3. **Case study şablonu + Mpox sayfası** → önizleme
4. **Work dizini + diğer 4 case study**
5. **Research, Experience, About, Contact**
6. **SEO/OG/sitemap/güvenlik başlıkları**
7. **Aşama 6:** mobil, erişilebilirlik, Lighthouse, bağlantı kontrolü → GitHub push → Vercel yayını

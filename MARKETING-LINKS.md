# CalFit — tracked links

Every link below lands on https://calfit.summerapps.com and carries its source
all the way into both store consoles:

- **App Store Connect** → Analytics → Sources, as the campaign `ct=<src>`
- **Play Console** → Acquisition reports, as `utm_source=<src>`

`?src=` accepts any lowercase `a–z 0–9 _` name up to 24 chars, so a new campaign
link needs no code change — invent one and it works.

## Organic social

| Placement | Link |
|---|---|
| Instagram bio | `https://calfit.summerapps.com/?src=ig` |
| Instagram Stories / link sticker | `https://calfit.summerapps.com/?src=ig_story` |
| Instagram post / Reels caption | `https://calfit.summerapps.com/?src=ig_post` |
| Threads | `https://calfit.summerapps.com/?src=threads` |
| TikTok bio | `https://calfit.summerapps.com/?src=tiktok` |
| YouTube description | `https://calfit.summerapps.com/?src=yt` |
| YouTube Shorts | `https://calfit.summerapps.com/?src=yt_shorts` |
| Telegram channel | `https://calfit.summerapps.com/?src=tg` |

## Paid — traffic / engagement objective only

Use these ONLY for campaigns whose objective is website traffic. For app-install
campaigns, link the store directly (see the warning below).

| Campaign | Link |
|---|---|
| Meta traffic campaign | `https://calfit.summerapps.com/?src=meta_traffic` |
| TikTok traffic campaign | `https://calfit.summerapps.com/?src=tiktok_traffic` |
| Google traffic campaign | `https://calfit.summerapps.com/?src=google_traffic` |

## Creators, email, offline

| Use | Link |
|---|---|
| Per creator | `https://calfit.summerapps.com/?src=ugc_<name>` |
| Founder email drip | `https://calfit.summerapps.com/?src=email` |
| QR code / print | `https://calfit.summerapps.com/?src=qr` |
| Seasonal push | `https://calfit.summerapps.com/?src=<campaign_name>` |

## ⚠️ Do NOT route app-install ads through this page

Meta App Install and Google App Campaigns attribute installs through their own
SDK against a direct store link. Sending them via a landing page adds a hop,
breaks that attribution, and loses installs. Point those straight at the store:

- iOS: `https://apps.apple.com/app/id6744866487`
- Android: `https://play.google.com/store/apps/details?id=com.summerapps.gymlog`

This page is for bio links, organic posts, creator links and traffic campaigns —
places where a raw store link is blocked or where the pitch has to do some work.

## Testing

- `?noredirect=1` — stay on the page instead of handing off to the store
- `?lang=en|ru|uz` — force a language
- `?state=iab` — preview the in-app-browser helper

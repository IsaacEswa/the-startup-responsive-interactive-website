Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# RadioGuide | MediaHuis
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Beschrijving
Mediahuis wil in samenwerking met Triple een website realiseren waarmee luisteraars hun favoriete radioprogramma’s kunnen volgen. De website biedt een duidelijk overzicht van programmatijdlijnen, zodat gebruikers eenvoudig kunnen vergelijken wie op welk moment presenteert en altijd up-to-date zijn over de programmering.
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

## Features
- Overizcht van de programma's van Veronica, SLAMFM en 100%NL
- Radiozenders filteren
- Detailpagina van een programma
- Tijdsindicatie die live meeloopt
- Dag in week selecteren

## Preview
### Mobiele versie
https://github.com/user-attachments/assets/a8f95cc8-4207-46c2-a9f3-bdb54b54dd69

### Desktop versie
https://github.com/user-attachments/assets/3d39bf7a-3f25-44cc-8332-20877ccd6ca4

Bekijk hier de live website: https://isaaceswa.github.io/the-startup-responsive-interactive-website

## Kenmerken
Ik heb gebruik gemaakt van HTML, CSS en JS om deze website te maken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
### HTML
Ik begon eerst met body, header, main en sections. Ik heb zo weinig mogelijk gebruik gemaakt van divjes. Bovenaan de pagina heb ik de H1 (logo), vervolgens H2 en daaronder H3. In de articles heb ik gebruik gemaakt van aria-labels en tab-index om de artikelen tabbaar te maken.

### CSS
Ik heb gebruik gemaakt van variabelen zoals: --row-start, --row-span, --overlay-color en --bg-image om de website dynamischer te maken.
https://github.com/IsaacEswa/the-startup-responsive-interactive-website/blob/9ee3f17640a754774106e93b44bcfb3267719cad/index.html#L163-L176

Ik heb de media-queries **min-width: 768px** en **min-width: 1024px** gebruikt.
Ik heb zoveel mogelijk CSS genest om mijn code schoon te houden, ook heb ik alle classes in het engels gedaan.
https://github.com/IsaacEswa/the-startup-responsive-interactive-website/blob/9ee3f17640a754774106e93b44bcfb3267719cad/styles/styles.css#L177-L194

User Interaction classes:
https://github.com/IsaacEswa/the-startup-responsive-interactive-website/blob/9ee3f17640a754774106e93b44bcfb3267719cad/styles/styles.css#L237-L245

Op de programma detail pagina heb ik ook gebruikt gemaakt van Grid. Op mobiel laat deze 2 artikelen naast elkaar zien en bij een groter scherm 4 naast elkaar.
https://github.com/IsaacEswa/the-startup-responsive-interactive-website/blob/9ee3f17640a754774106e93b44bcfb3267719cad/styles/styles.css#L513-L521

### JavaScript
Voor de interactie heb ik het 3 stappenplan gevolgd:
https://github.com/IsaacEswa/the-startup-responsive-interactive-website/blob/4f98346eed854cadb256d90d2544a1bc22b3e364/scripts/scripts.js#L24-L39

## Toegankelijkheid
Ik heb een een [WCAG audit](https://github.com/IsaacEswa/the-startup-responsive-interactive-website/issues/13) en Color contrast testen ([normal-sized text](https://github.com/IsaacEswa/the-startup-responsive-interactive-website/issues/14), [large-sized text](https://github.com/IsaacEswa/the-startup-responsive-interactive-website/issues/15), [icons](https://github.com/IsaacEswa/the-startup-responsive-interactive-website/issues/16)) gedaan. 

De uitslagen waren erg positief. Om de website nog toegankelijker te maken heb ik aan elk artikel een tab-index toegevoegd en correcte aria-labels

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).



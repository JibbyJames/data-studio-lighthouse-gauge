# data-studio-lighthouse-gauge
 A community visualisation for Google Data Studio in the style of the site speed auditing tool Lighthouse gauges.

 ![alt text](https://raw.githubusercontent.com/JibbyJames/data-studio-lighthouse-gauge/master/cover.png "Lighthouse Gauge")

 To use in Data Studio, open the Community Visualisation panel, then set the following as the manifest path:
 
 `gs://jjbuckley-datastudio/lighthouse-gauge/`

 You will see the below card appear. Select this to add this visualisation to your report. Remember to enable community visualisations for your data sources as well.

 ![alt text](https://raw.githubusercontent.com/JibbyJames/data-studio-lighthouse-gauge/master/lh-gauge-card.png "Lighthouse Gauge")

The three range values can be set by metric values which change depending on the data source, or set as static values in the Style tab which the gauge defaults to if no metric values are used. If range values overlap, the range which was evaluated first will be the colour that is shown (ranges are evaluated in the following order: low, mid, high).

The range colours are configurable, as is the font size and font family. The background can be hidden, line thickness increased, and switch between rounded or flat edges. This can all be done in the Style tab of the visualisation.

## Examples

While the default styling matches what is shown in Lighthouse reports, the configuration options available make it possible to create many different styles of gauges:

 ![alt text](https://raw.githubusercontent.com/JibbyJames/data-studio-lighthouse-gauge/master/example-1.png "Fitness trackers")

 ![alt text](https://raw.githubusercontent.com/JibbyJames/data-studio-lighthouse-gauge/master/example-2.png "Thick bars")
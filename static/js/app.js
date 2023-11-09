// Fetch the JSON data and console log it
function fetchData() {
    return d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json");
}

function buildBarChart(sampleId, data) {
    var sampleData = data.samples.filter(sample => sample.id === sampleId)[0];
    var sampleValues = sampleData.sample_values.slice(0, 10).reverse();
    var otuIds = sampleData.otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
    var otuLabels = sampleData.otu_labels.slice(0, 10).reverse();

    var trace1 = {
        x: sampleValues,
        y: otuIds,
        text: otuLabels,
        type: "bar",
        orientation: "h"
    };

    var data = [trace1];

    var layout = {
        title: "Top 10 OTUs Found",
        margin: { t: 30, l: 150 }
    };

    Plotly.newPlot("bar", data, layout);
}

function buildBubbleChart(sampleId, data) {
    var sampleData = data.samples.filter(sample => sample.id === sampleId)[0];

    var trace2 = {
        x: sampleData.otu_ids,
        y: sampleData.sample_values,
        text: sampleData.otu_labels,
        mode: 'markers',
        marker: {
            size: sampleData.sample_values,
            color: sampleData.otu_ids,
            colorscale: 'Earth'
        }
    };

    var data = [trace2];

    var layout = {
        title: 'Bacteria Cultures Per Sample',
        showlegend: false,
        height: 600,
        width: 1200
    };

    Plotly.newPlot('bubble', data, layout);
}

function buildMetadata(sampleId, data) {
    var metadata = data.metadata.filter(sample => sample.id.toString() === sampleId)[0];
    var panel = d3.select("#sample-metadata");
    panel.html("");

    Object.entries(metadata).forEach(([key, value]) => {
        panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
}

function updateGaugeChart(sampleId, data) {
    var wfreq = data.metadata.filter(sample => sample.id.toString() === sampleId)[0].wfreq;
    buildGaugeChart(wfreq);
}

function buildGaugeChart(wfreq) {
    // Assuming buildGaugeChart is defined here or in another file
    // ... (code to build/update the gauge chart based on wfreq) ...
}

function optionChanged(newSampleId) {
    fetchData().then(data => {
        buildBarChart(newSampleId, data);
        buildBubbleChart(newSampleId, data);
        buildMetadata(newSampleId, data);
        updateGaugeChart(newSampleId, data); // Update the gauge chart
    });
}

function init() {
    var selector = d3.select("#selDataset");

    fetchData().then(data => {
        data.names.forEach((sampleId) => {
            selector
                .append("option")
                .text(sampleId)
                .property("value", sampleId);
        });

        const firstSample = data.names[0];
        buildBarChart(firstSample, data);
        buildBubbleChart(firstSample, data);
        buildMetadata(firstSample, data);
        updateGaugeChart(firstSample, data); // Initialize the gauge chart
    });
}

init();

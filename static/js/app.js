function dorpDown(){
    var button = d3.select('#selDataset');

    d3.json('samples.json').then((data) => {
        
        var sampleNames = data.names;
        console.log(sampleNames);

        sampleNames.forEach(element => {
            button.append('option')
            .text(element)
            .value("value",element)
            
        });



    });
}
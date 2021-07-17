function createGraph( graphData ){
    const { ctx, type, data, data_labels, dataset_labels } = graphData

    return new Chart(ctx, {
        type: type,
        data: {
            labels: data_labels,
            datasets: [{
                label: dataset_labels,
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
}

$(async function(){

    async function getData(){
            return fetch('/data-request')
            .then( res => res.json() )
            .then( data => data )
            .catch(err => { console.log(err) }) 
    } 

    let user = await getData()
    document.querySelector('#earnings').innerHTML = user.points
    if(user && document.location.pathname === '/'){

        const ctxBar = document.querySelector('#card-bar-graph').getContext('2d')
        const ctxPolar = document.querySelector('#card-pie-graph').getContext('2d')

        const bar = {
            ctx: ctxBar,
            type: 'bar',
            data: user.earnings.daily,
            data_labels: [ 'Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7' ],
            dataset_labels: 'Daily Earnings'
        }

        const polar = {
            ctx: ctxPolar,
            type: 'polarArea',
            data: user.monthlyTrashCollection,
            data_labels: [ 'Month1', 'Month2', 'Month3', 'Month4', 'Month5', 'Month6', 'Month7' ],
            dataset_labels: 'Monthly Trash Collection'
        }
        
        createGraph(bar)
        createGraph(polar)

    }

})

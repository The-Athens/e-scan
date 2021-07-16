
$(function() {
    const data = user.earnings.daily
    const ctx = $('#card-bar-graph')[0].getContext('2d')
    const data_option = {
        type: 'bar',
        labels: [ 'day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7' ],
        datasets: [{
            label: 'Daily Earnings',
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

    }
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    const userChart = new Chart(ctx, data_option, options)
})
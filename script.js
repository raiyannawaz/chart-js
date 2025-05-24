let wrapper = document.querySelector('.wrapper')

let leftSideDiv = document.querySelector('.left-side-div')

let wrapperHeight = wrapper.getBoundingClientRect().height;

let btnUpdate = document.querySelector('.btn-update')

let screenWidth = window.screen.width

let windowHeight = window.screen.height

const bar = document.getElementById('bar');

if (screenWidth <= 450) {
    window.onscroll = () => {

        if (scrollY + windowHeight > wrapperHeight)  {
            leftSideDiv.style.opacity = 0;
            btnUpdate.style.display = 'block'
        }
        else {
            leftSideDiv.style.opacity = 1;
            btnUpdate.style.display = 'none'
        }
    }

    new Chart(bar, {
        type: 'bar',
        data: {
            labels: [20, 25, 30, 35, 40, 60, 65],
            datasets: [{
                data: [70, 100, 130, 170, 220, 260, 320],
                borderWidth: 0,
                backgroundColor: (context) => {
                    const bgColor = ['#46dad3', 'rgb(18, 168, 228)', 'rgb(18, 91, 228)']
                    if (!context.chart.chartArea) {
                        return;
                    }
                    const { ctx, data, chartArea: { top, bottom } } = context.chart;
                    const gradientBg = ctx.createLinearGradient(50, top, 0, bottom);
                    const colorTranch = 1 / (bgColor.length - 1);
                    for (let i = 0; i < bgColor.length; i++) {
                        // gradientBg.addColorStop(0 + i * colorTranch, bgColor[i])
                        gradientBg.addColorStop(0, bgColor[0])
                        gradientBg.addColorStop(0.5, bgColor[1])
                        gradientBg.addColorStop(1, bgColor[2])
                    }
                    // console.log(ctx, data)
                    return gradientBg
                }
            }]
        },

        options: {
            plugins: {
                legend: {
                    display: false
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value, index, ticks) {
                            if (value % 100 === 0) {
                                return `$${value}  `
                            }
                        }
                    },
                    grid: {
                        drawTicks: false,
                    },
                    border: {
                        dash: [2, 4],
                    }
                }
            },
        }
    });
}
else {
    new Chart(bar, {
        type: 'bar',
        data: {
            labels: [20, '', 25, '', 30, '', 35, '', 40, '', 60, '', 65],
            datasets: [{
                data: [70, 80, 100, 115, 130, 150, 170, 190, 220, 240, 260, 280, 320],
                borderWidth: 0,
                backgroundColor: (context) => {
                    const bgColor = ['#46dad3', 'rgb(18, 168, 228)', 'rgb(18, 91, 228)']
                    if (!context.chart.chartArea) {
                        return;
                    }
                    const { ctx, data, chartArea: { top, bottom } } = context.chart;
                    const gradientBg = ctx.createLinearGradient(50, top, 0, bottom);
                    const colorTranch = 1 / (bgColor.length - 1);
                    for (let i = 0; i < bgColor.length; i++) {
                        // gradientBg.addColorStop(0 + i * colorTranch, bgColor[i])
                        gradientBg.addColorStop(0, bgColor[0])
                        gradientBg.addColorStop(0.5, bgColor[1])
                        gradientBg.addColorStop(1, bgColor[2])
                    }
                    // console.log(ctx, data)
                    return gradientBg
                }
            }]
        },

        options: {
            plugins: {
                legend: {
                    display: false
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value, index, ticks) {
                            if (value % 100 === 0) {
                                return `$${value}  `
                            }
                        }
                    },
                    grid: {
                        drawTicks: false,
                    },
                    border: {
                        dash: [2, 4],
                    }
                }
            },
        }
    });
}

const doughnut1 = document.getElementById('doughnut1')
const doughnut2 = document.getElementById('doughnut2')
const doughnut3 = document.getElementById('doughnut3')

new Chart(doughnut1, {
    type: 'doughnut',
    data: {
        labels: [
            'Average',
        ],
        datasets: [{
            data: [78, 22],
            backgroundColor: [
                '#46dad3',
                '#fff',
            ],
            hoverOffset: 4
        }]
    },
    options: {
        aspectRatio: 1,
        plugins: {
            legend: {
                display: false,
            }
        }
    },
    plugins: [{
        id: 'doughnutLabel',
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data } = chart
            ctx.save();

            const xCool = chart.getDatasetMeta(0).data[0].x;
            const yCool = chart.getDatasetMeta(0).data[0].y;
            ctx.font = 'bold 15px josefin-sans'
            ctx.fillText('78', xCool, yCool)
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle'
        }
    },
    {
        id: 'SliceThickness',
        beforeDraw(chart, plugins) {
            let SliceThicknessPixels = [6, 6];
            SliceThicknessPixels.forEach((thikness, index) => {
                chart.getDatasetMeta(0).data[index].outerRadius = (chart.chartArea.width / thikness)
                chart.getDatasetMeta(0).data[index].outerRadius = (chart.chartArea.width / thikness)
            })
        }
    }]
})

new Chart(doughnut2, {
    type: 'doughnut',
    data: {
        labels: [
            'Top',
        ],
        datasets: [{
            data: [95, 5],
            backgroundColor: [
                '#46dad3',
                '#fff',
            ],
            hoverOffset: 4
        }]
    },
    options: {
        aspectRatio: 1,
        plugins: {
            legend: {
                display: false,
            }
        }
    },
    plugins: [{
        id: 'doughnutLabel',
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data } = chart
            ctx.save();

            const xCool = chart.getDatasetMeta(0).data[0].x;
            const yCool = chart.getDatasetMeta(0).data[0].y;
            ctx.font = 'bold 15px josefin-sans'
            ctx.fillText('95', xCool, yCool)
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle'
        }
    },
    {
        id: 'SliceThickness',
        beforeDraw(chart, plugins) {
            let SliceThicknessPixels = [6, 6];
            SliceThicknessPixels.forEach((thikness, index) => {
                chart.getDatasetMeta(0).data[index].outerRadius = (chart.chartArea.width / thikness)
                chart.getDatasetMeta(0).data[index].outerRadius = (chart.chartArea.width / thikness)
            })
        }
    }]
})

new Chart(doughnut3, {
    type: 'doughnut',
    data: {
        labels: [
            'Me',
        ],
        datasets: [{
            data: [59, 41],
            backgroundColor: [
                '#46dad3',
                '#fff',
            ],
            hoverOffset: 4
        }]
    },
    options: {
        aspectRatio: 1,
        plugins: {
            legend: {
                display: false,
            }
        }
    },
    plugins: [{
        id: 'doughnutLabel',
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data } = chart
            ctx.save();

            const xCool = chart.getDatasetMeta(0).data[0].x;
            const yCool = chart.getDatasetMeta(0).data[0].y;
            ctx.font = 'bold 15px josefin-sans'
            ctx.fillText('59', xCool, yCool)
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle'
        }
    },
    {
        id: 'SliceThickness',
        beforeDraw(chart, plugins) {
            let SliceThicknessPixels = [6, 6];
            SliceThicknessPixels.forEach((thikness, index) => {
                chart.getDatasetMeta(0).data[index].outerRadius = (chart.chartArea.width / thikness)
                chart.getDatasetMeta(0).data[index].outerRadius = (chart.chartArea.width / thikness)
            })
        }
    }]
})

export function initFinanceCharts() {
  document.addEventListener('DOMContentLoaded', () => {
    const incomeCtx = document.getElementById('incomeChart').getContext('2d');
    new Chart(incomeCtx, {
      type: 'bar',
      data: {
        labels: ['Янв', 'Фев', 'Мар'],
        datasets: [{
          label: 'Доходы',
          data: [30000, 40000, 35000],
          backgroundColor: 'rgba(75, 192, 192, 0.2)'
        }]
      }
    });

    const expensesCtx = document.getElementById('expensesChart').getContext('2d');
    new Chart(expensesCtx, {
      type: 'line',
      data: {
        labels: ['Янв', 'Фев', 'Мар'],
        datasets: [{
          label: 'Расходы',
          data: [15000, 17000, 20000],
          borderColor: 'rgb(255, 99, 132)'
        }]
      }
    });
  });
}

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 0', function(){
    console.log('executando Tarefa 1', new Date().getSeconds())
})

setTimeout(() => {
   tarefa1.cancel()
   console.log('tarefa cancelada')
}, 20000);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0,5)]
regra.hour = 22
regra.second = 15

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2', new Date().getSeconds())
})
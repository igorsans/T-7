// atividade: é ou não é ?

import chalk from "chalk";

function temperaturaPaciente(x) {
    if(x >=37.5){
        console.log(chalk.red("Paciente febril"))
    } else {
        console.log(chalk.green("Paciente não-febril"))        
    }
}

temperaturaPaciente(38)
temperaturaPaciente(25)
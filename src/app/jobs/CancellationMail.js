import Mail from '../../utils/Mail';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';

class CancellationMail{
    get key(){
        return 'CancelationMail';
    }

    async handle({ date }){
        console.log('fila runs')
        const { appointment } = data;
        await Mail.sendMail({
            to:`${appointment.provider.name} <${appointment.provider.email}`,
            subject: 'Canceled Appointment',
            template:'cancelation',
            context: {
              provider: appointment.provider.name,
              user: appointment.user.name,
              date: format(
                parseISO(appointment.date),
                "'dia' dd 'de' MMMM', às' H:mm'h'",
                { locale: pt }
              )
            }
        })
    }
}

export default new CancellationMail();
import { string } from 'prop-types';

const MainState = {
    name: string,
    profession: string,
    profile: string,
    achievements: []
}

export function defaultMainState(MainState){
    return (
        name = 'Norma Angélica María Tovar Uribe',
        profession =  'Ingeniera de Sistemas',
        profile = 'Soy una persona comprometida y aprendo fácil',
        achievements = ['Mejor Bachiller', 'Danier Izasa', 'Grado de Honor']
    );
}
export default function TraineesData (state = [],action){
    switch (action.type) {
        case 'set':
            return state = action.payload    
        default:
            return state;
    }
}
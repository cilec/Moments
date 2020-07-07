export default {
    namespace:'demo',
    state:{
        num:0
    },
    reducers:{
        add:(state,{payload})=>{
            state.num++
        }
    },
    effects:{

    }
}
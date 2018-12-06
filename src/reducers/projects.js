import * as Types from '../constant/actionTypes';

const initialState = [
    {
        _id: 1,
        name: 'react',
        description: 'hoc react',
        members: [
            {
                _id: '1',
                name: 'vo quoc tuan',
                email: 'vqtuan1@gmail.com'
            },
            {
                _id: '2',
                name: 'vo quoc tuan',
                email: 'vqtuan2@gmail.com'
            },
            {
                _id: '3',
                name: 'vo quoc tuan',
                email: 'vqtuan3@gmail.com'
            },
            {
                _id: '4',
                name: 'vo quoc tuan',
                email: 'vqtuan4@gmail.com'
            }
        ]
    },
    {
        _id: 2,
        name: 'react',
        description: 'hoc react',
        members: [
            {
                _id: '1',
                name: 'vo quoc tuan',
                email: 'vqtuan1@gmail.com'
            },
            {
                _id: '2',
                name: 'vo quoc tuan',
                email: 'vqtuan2@gmail.com'
            },
            {
                _id: '3',
                name: 'vo quoc tuan',
                email: 'vqtuan3@gmail.com'
            },
            {
                _id: '4',
                name: 'vo quoc tuan',
                email: 'vqtuan4@gmail.com'
            }
        ]
    },
    {
        _id: 3,
        name: 'react',
        description: 'hoc react',
        members: [
            {
                _id: '1',
                name: 'vo quoc tuan',
                email: 'vqtuan1@gmail.com'
            },
            {
                _id: '2',
                name: 'vo quoc tuan',
                email: 'vqtuan2@gmail.com'
            },
            {
                _id: '3',
                name: 'vo quoc tuan',
                email: 'vqtuan3@gmail.com'
            },
            {
                _id: '4',
                name: 'vo quoc tuan',
                email: 'vqtuan4@gmail.com'
            }
        ]
    },
    {
        _id: 4,
        name: 'react',
        description: 'hoc react',
        members: [
            {
                _id: '1',
                name: 'vo quoc tuan',
                email: 'vqtuan1@gmail.com'
            },
            {
                _id: '2',
                name: 'vo quoc tuan',
                email: 'vqtuan2@gmail.com'
            },
            {
                _id: '3',
                name: 'vo quoc tuan',
                email: 'vqtuan3@gmail.com'
            },
            {
                _id: '4',
                name: 'vo quoc tuan',
                email: 'vqtuan4@gmail.com'
            }
        ]
    },
    {
        _id: 5,
        name: 'react',
        description: 'hoc react',
        members: [
            {
                _id: '1',
                name: 'vo quoc tuan',
                email: 'vqtuan1@gmail.com'
            },
            {
                _id: '2',
                name: 'vo quoc tuan',
                email: 'vqtuan2@gmail.com'
            },
            {
                _id: '3',
                name: 'vo quoc tuan',
                email: 'vqtuan3@gmail.com'
            },
            {
                _id: '4',
                name: 'vo quoc tuan',
                email: 'vqtuan4@gmail.com'
            }
        ]
    },
    {
        _id: 6,
        name: 'react',
        description: 'hoc react',
        members: [
            {
                _id: '1',
                name: 'vo quoc tuan',
                email: 'vqtuan1@gmail.com'
            },
            {
                _id: '2',
                name: 'vo quoc tuan',
                email: 'vqtuan2@gmail.com'
            },
            {
                _id: '3',
                name: 'vo quoc tuan',
                email: 'vqtuan3@gmail.com'
            },
            {
                _id: '4',
                name: 'vo quoc tuan',
                email: 'vqtuan4@gmail.com'
            }
        ]
    },
    {
        _id: 7,
        name: 'react',
        description: 'hoc react',
        members: [
            {
                _id: '1',
                name: 'vo quoc tuan',
                email: 'vqtuan1@gmail.com'
            },
            {
                _id: '2',
                name: 'vo quoc tuan',
                email: 'vqtuan2@gmail.com'
            },
            {
                _id: '3',
                name: 'vo quoc tuan',
                email: 'vqtuan3@gmail.com'
            },
            {
                _id: '4',
                name: 'vo quoc tuan',
                email: 'vqtuan4@gmail.com'
            }
        ]
    },
    {
        _id: 8,
        name: 'react',
        description: 'hoc react 8',
        members: [
            {
                _id: '1',
                name: 'vo quoc tuan',
                email: 'vqtuan1@gmail.com'
            },
            {
                _id: '2',
                name: 'vo quoc tuan',
                email: 'vqtuan2@gmail.com'
            },
            {
                _id: '3',
                name: 'vo quoc tuan',
                email: 'vqtuan3@gmail.com'
            },
            {
                _id: '4',
                name: 'vo quoc tuan',
                email: 'vqtuan4@gmail.com'
            }
        ]
    },
    {
        _id: 9,
        name: 'react',
        description: 'hoc react 9',
        members: [
            {
                _id: '1',
                name: 'vo quoc tuan',
                email: 'vqtuan1@gmail.com'
            },
            {
                _id: '2',
                name: 'vo quoc tuan',
                email: 'vqtuan2@gmail.com'
            },
            {
                _id: '3',
                name: 'vo quoc tuan',
                email: 'vqtuan3@gmail.com'
            },
            {
                _id: '4',
                name: 'vo quoc tuan',
                email: 'vqtuan4@gmail.com'
            }
        ]
    }
];

var findProject = (id, state) => {
    for(let i =0; i< state.length; i++){
        if(state[i]._id === id){
            return i;
        }
    }
    return -1;
}

var RemoveMember = (member_id, project) =>{
    var {members} = project;
    for(let i = 0; i < members.length; i++){
        if(member_id === members[i]._id){
            members.splice(i, 0);
            break;
        }
    }
    project.members = members;
    return project;
}

var deleteProject = (index, state) => {
    if(index !== -1){
        state.splice(index, 1);
    }
    return state;
}

var editProject = (project, state) => {
    var index = findProject(project._id, state);
    if(index !== -1){
        state[index] = project;
    }
    return state;
}

var addNewProject = (project, state) =>{
    state.push(project);
    return state;
}

const Projects  = (state = initialState, action) =>{
    switch(action.type){
        case Types.FETCH_PROJECTS:
            var {err, data} = action.result;
            if(!err){
                state = data;
            }
            return [...state];
        case Types.DELETE_PROJECT:
            var {err, data} = action.result;
            if(err) return [...state];
            var index = findProject(data._id, state);
            if(index !== -1){
                state = deleteProject(index, state);
            }
            return [...state];
        case Types.EDTIT_PROJECT:
            state = editProject(action.result.project, state);
            return [...state];
        case Types.CREATE_NEW_PROJECT:
            var {err, data} = action.result;
            if(!err){
                state = addNewProject(data, state);
            }
            return [...state];
        case Types.REMOVE_USER_FROM_PROJECT:
            var {project_id, member_id} = action.result;
            var index = findProject(project_id, state);
            if(index !== -1){
                state[index] = RemoveMember(member_id, state[index]);
            }
            return [...state];
        default: return [...state];
    }
}

export default Projects;
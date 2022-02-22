interface ThemeState {
  theme: string;
}

interface Action {
  type: string;
}

const initialState: ThemeState = {
  theme: 'light'
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
}
export interface Quotation {
  mId: string;
  price: number;
  volume: number;
}

export interface CentralState {
  quotations: Quotation[];
}

const initialState: CentralState = {
  quotations: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_QUOTATION":
      return {
        quotations: [...state.quotations, action.quote],
      };
    default:
      return state;
  }
};

export default reducer;

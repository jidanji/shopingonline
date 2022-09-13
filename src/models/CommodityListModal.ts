import { produce } from 'immer';

export default {
  namespace: 'CommodityListModal',
  state: {
    SelectedItems: [],
  },
  reducers: {
    addList(state, { payload }) {
      return produce(state, (draftState: any) => {
        var filters = draftState.SelectedItems.filter(
          (item) => item.Commodityid == payload.Commodityid,
        );
        if (filters.length) {
          filters[0].counter = filters[0].counter + 1;
        } else {
          draftState.SelectedItems.push({ ...payload, counter: 1 });
        }
      });
    },

    removeItem(state, { payload }) {
      return produce(state, (draftState: any) => {
        draftState.SelectedItems = draftState.SelectedItems.filter(
          (item) => item.Commodityid != payload.Commodityid,
        );
      });
    },
  },
  effects: {},
};

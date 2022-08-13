import { cryptApiSlice } from "../api/cryptApiSlice";
import { setCoins, setFetched } from "../slices/coinSlice";

export const coinsApiSlice = cryptApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCoins: builder.mutation({
      query: (ticker) => {
        const url = `/${ticker}/info`;
        return { url };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCoins(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetCoinsMutation } = coinsApiSlice;

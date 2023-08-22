import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutListingsInput } from "./TripUpdateManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WishlistUpdateManyWithoutListingsInput } from "./WishlistUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  description?: string | null;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string;
  price?: number | null;
  title?: string;
  trips?: TripUpdateManyWithoutListingsInput;
  user?: UserWhereUniqueInput;
  wishlists?: WishlistUpdateManyWithoutListingsInput;
};

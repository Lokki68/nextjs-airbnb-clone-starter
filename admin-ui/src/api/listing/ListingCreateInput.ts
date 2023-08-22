import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutListingsInput } from "./TripCreateNestedManyWithoutListingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  description?: string | null;
  locationData?: InputJsonValue;
  locationType: string;
  mapData?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType: string;
  price?: number | null;
  title: string;
  trips?: TripCreateNestedManyWithoutListingsInput;
  user: UserWhereUniqueInput;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
};

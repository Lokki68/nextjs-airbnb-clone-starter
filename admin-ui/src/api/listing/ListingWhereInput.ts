import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ListingWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringFilter;
  price?: IntNullableFilter;
  title?: StringFilter;
  trips?: TripListRelationFilter;
  user?: UserWhereUniqueInput;
  wishlists?: WishlistListRelationFilter;
};

import type { ReactNode } from "react";
import {
  CustomerReviews,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "../sections";

export type AppSection = {
  id: string;
  className: string;
  element: ReactNode;
};
export const APP_SECTIONS: AppSection[] = [
  {
    id: "hero",
    className: "xl:padding-l wide:padding-r padding-b",
    element: <Hero />,
  },
  {
    id: "popular-products",
    className: "padding",
    element: <PopularProducts />,
  },
  { id: "super-quality", className: "padding", element: <SuperQuality /> },
  { id: "services", className: "padding-x py-10", element: <Services /> },
  { id: "special-offer", className: "padding", element: <SpecialOffer /> },
  {
    id: "customer-reviews",
    className: "padding bg-pale-blue",
    element: <CustomerReviews />,
  },
  {
    id: "subscribe",
    className: "padding-x sm:py-32 py-16 w-full",
    element: <Subscribe />,
  },
];

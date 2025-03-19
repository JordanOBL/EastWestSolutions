export type StripePrice = {
  id: string;
  object: "price";
  active: boolean;
  billing_scheme: "per_unit" | "tiered";
  created: number;
  currency: string;
  custom_unit_amount: null | number;
  livemode: boolean;
  lookup_key: string | null;
  metadata: Record<string, string>;
  nickname: string | null;
  product: string;
  recurring: null | {
    interval: "day" | "week" | "month" | "year";
    interval_count: number;
    trial_period_days?: number;
  };
  tax_behavior: "inclusive" | "exclusive" | "unspecified";
  tiers_mode: null | "graduated" | "volume";
  transform_quantity: null | object;
  type: "one_time" | "recurring";
  unit_amount: number;
  unit_amount_decimal: string;
};

export type StripeProduct = {
  id: string;
  object: "product";
  active: boolean;
  attributes: string[];
  created: number;
  default_price: StripePrice;
  description: string;
  images: string[];
  livemode: boolean;
  marketing_features: {name: string}[];
  metadata: {
    specialty: string;
    service: string;
    min_price?: number;
    max_price?: number;
    tier_name: string;
    tier_num: string;
  };
  name: string;
  package_dimensions: null | object;
  shippable: null | boolean;
  statement_descriptor: string | null;
  tax_code: string | null;
  type: "service" | "good";
  unit_label: string | null;
  updated: number;
  url: string | null;
};

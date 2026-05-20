"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function HeroLottie() {
  const heroAnimation = "/data.json";

  return <DotLottieReact src={heroAnimation} loop autoplay />;
}

export function ExpressLottie() {
  const expressAnimation = "/bike_animation.json";

  return <DotLottieReact src={expressAnimation} loop autoplay />;
}

export function PickupLottie() {
  const pickupAnimation = "/pickup_station.json";

  return <DotLottieReact src={pickupAnimation} loop autoplay />;
}

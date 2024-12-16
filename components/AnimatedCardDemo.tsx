"use client"
import { AnimatedCard } from "@/components/ui/animatedCards";

export function AnimatedCardDemo() {
  const testimonials = [
    {
      quote:
        "Need a robust inventory management solution with real-time tracking, low-stock alerts, and multi-location support?",
      name: "Weehena Farm - Inventory",
      designation: "Weehena Farm - Inventory",
      src: "/inventory.png"
    },
    {
      quote:
        "543m nbvc",
      name: "NOC OPS System",
      designation: "NOC OPS System",
      src: "/NOCOPS.jpg",
    },
    {
      quote:
        "Want a customized ERP solution to streamline your small business's finances, inventory, and customer management?",
      name: "E Supplier",
      designation: "E Supplier",
      src: "/ESuplier.jpg",
    },
    {
      quote:
        "An all-in-one platform to streamline car service center operations, with features for scheduling appointments.",
      name: "Car Service Station Management System",
      designation: "",
      src: "/car_service.png",
    },
    {
      quote:
        "Ready to elevate your school cricket program with a system for player tracking, match scheduling, and performance insights?",
      name: "Richmand College Cricket",
      designation: "Richmand College Cricket",
      src: "/rcc_5.png",
    },
  ];
  return <AnimatedCard testimonials={testimonials} />;
}

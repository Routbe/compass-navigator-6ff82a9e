import { createFileRoute, notFound } from "@tanstack/react-router";
import { getNextBookingSlots } from "@/lib/booking-engine/booking.functions";
import BookPublic from "@/components/imported-pages/BookPublic";

/** Linked calendar: the public agenda tied to a member's identity. */
export const Route = createFileRoute("/u/$username_/agenda")({
  loader: async ({ params }) => {
    const event = await getNextBookingSlots({ data: { handle: params.username.replace(/^@/, ""), eventTypeId: null } });
    if (!event) throw notFound();
    return { eventTypeId: event.eventTypeId, title: event.title, handle: params.username };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `Agenda van @${loaderData.handle}` : "Agenda" },
      { name: "description", content: "Bekijk beschikbare tijden en boek een afspraak via ROUT." },
      { property: "og:title", content: loaderData ? `Agenda van @${loaderData.handle}` : "Agenda" },
      { property: "og:description", content: "Bekijk beschikbare tijden en boek een afspraak via ROUT." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LinkedAgenda,
});

function LinkedAgenda() {
  const { eventTypeId } = Route.useLoaderData();
  return <BookPublic eventTypeId={eventTypeId} />;
}

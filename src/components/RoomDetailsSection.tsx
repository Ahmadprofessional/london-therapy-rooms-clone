import { ROOM_DETAILS } from "@/data/site";
import { RoomDetail, type RoomDetailLayout } from "@/components/RoomDetail";
import { RoomsIntro } from "@/components/RoomsIntro";

/** Spacing measured per room on the live site (1440px). */
const ROOM_LAYOUTS: Partial<RoomDetailLayout>[] = [
  { padding: "36px 70px 23px" },
  { padding: "2px 70px 5px", suitableGap: 7, listGap: 0, accordionGap: 0, buttonGap: 7 },
  { padding: "41px 70px 36px" },
];

export function RoomDetailsSection() {
  return (
    <>
      <RoomsIntro />
      {ROOM_DETAILS.map((room, i) => (
        <RoomDetail key={room.title} room={room} layout={ROOM_LAYOUTS[i]} />
      ))}
    </>
  );
}

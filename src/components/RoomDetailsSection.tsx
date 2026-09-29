import { ROOM_DETAILS } from "@/data/site";
import { RoomDetail } from "@/components/RoomDetail";
import { RoomsIntro } from "@/components/RoomsIntro";

export function RoomDetailsSection() {
  return (
    <>
      <RoomsIntro />
      {ROOM_DETAILS.map((room) => (
        <RoomDetail key={room.title} room={room} />
      ))}
    </>
  );
}

export default RoomDetailsSection;

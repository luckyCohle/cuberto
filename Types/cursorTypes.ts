export const curFollowerStyles = {
    default: "bg-black rounded-full w-2 h-2",
    about: "bg-red-500 w-6 h-6",
    contact: "bg-green-500 w-8 h-8",
  } as const;
  
  export type CurFollowType =
    | typeof curFollowerStyles.default
    | typeof curFollowerStyles.about
    | typeof curFollowerStyles.contact;
  
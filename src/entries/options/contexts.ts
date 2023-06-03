import { createContext } from "react";
import { ListableInstance } from "~/ts";

export const InstancesContext = createContext<ListableInstance[]>([]);

export const ListNotificationContext = createContext<(index: number) => void>((index: number) => {});
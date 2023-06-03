import { createContext } from "react";
import { ListableInstance } from "~/ts";

export const InstancesContext = createContext<ListableInstance[]>([]);
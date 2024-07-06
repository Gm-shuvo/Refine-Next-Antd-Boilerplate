import { DELETED, INSERTED,  } from "src/constants";

export function successNotification(recordName: string, type: string, data?: unknown, values?: unknown, resource?: string) {
    return {
        message: `Successfully ${type === INSERTED? INSERTED : DELETED} ${recordName}`,
        description: "Great!",
        type: "success",
    }
} 
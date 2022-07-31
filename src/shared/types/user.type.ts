import type { Metadata, Schema, WithId } from "./common.type";

export type Operations = "read" | "write" | "update" | "delete";

export type Policy = {
	object: string;
} & Record<Operations, boolean>;

type RoleSpec = {
	policies: Policy[];
};

export type Role = WithId & Schema<Metadata, RoleSpec>;

type UserSpec = {
	username: string;
	email: string;
};

export type User = WithId & Schema<Metadata, UserSpec>;

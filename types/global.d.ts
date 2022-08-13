import { Connection } from "mongoose";

declare global {
	// global var cannot be scoped with let
	// noinspection ES6ConvertVarToLetConst
	var mongoose: any;
}

export const mongoose = global.mongoose || new Connection();

if (process.env.NODE_ENV !== "production") global.mongoose = mongoose;

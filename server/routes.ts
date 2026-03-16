import type { Express } from "express";
import type { Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Put application routes here and prefix all routes with /api.
  // This project currently serves a static frontend, so no API routes are registered.

  return httpServer;
}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Bike as PrismaBike } from "@prisma/client";

export class BikeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BikeCountArgs, "select">): Promise<number> {
    return this.prisma.bike.count(args);
  }

  async bikes(args: Prisma.BikeFindManyArgs): Promise<PrismaBike[]> {
    return this.prisma.bike.findMany(args);
  }
  async bike(args: Prisma.BikeFindUniqueArgs): Promise<PrismaBike | null> {
    return this.prisma.bike.findUnique(args);
  }
  async createBike(args: Prisma.BikeCreateArgs): Promise<PrismaBike> {
    return this.prisma.bike.create(args);
  }
  async updateBike(args: Prisma.BikeUpdateArgs): Promise<PrismaBike> {
    return this.prisma.bike.update(args);
  }
  async deleteBike(args: Prisma.BikeDeleteArgs): Promise<PrismaBike> {
    return this.prisma.bike.delete(args);
  }
}

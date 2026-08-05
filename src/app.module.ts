import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { UserRolesModule } from './modules/user-roles/user-roles.module';
import { RolePermissionsModule } from './modules/role-permissions/role-permissions.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';



@Module({
  imports: [
     ThrottlerModule.forRoot([
      {
        ttl: 60000,  // ventana de 1 minuto en milisegundos
        limit: 10,   // máximo 10 requests por minuto por IP
      },
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    RolesModule,
    PermissionsModule,
    UserRolesModule,
    RolePermissionsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

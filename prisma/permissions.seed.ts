// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// // Tipado fuerte para usar los permisos como constantes en guards/decorators
// export const PERMISSIONS = {
//   // Usuarios
//   USERS_READ: 'users.read',
//   USERS_CREATE: 'users.create',
//   USERS_UPDATE: 'users.update',
//   USERS_DELETE: 'users.delete',

//   // Roles
//   ROLES_READ: 'roles.read',
//   ROLES_ASSIGN: 'roles.assign',

//   // Permisos
//   PERMISSIONS_READ: 'permissions.read',

//   // Productos
//   PRODUCTS_READ: 'products.read',
//   PRODUCTS_CREATE: 'products.create',
//   PRODUCTS_UPDATE: 'products.update',
//   PRODUCTS_DELETE: 'products.delete',

//   // Categorías
//   CATEGORIES_READ: 'categories.read',
//   CATEGORIES_CREATE: 'categories.create',
//   CATEGORIES_UPDATE: 'categories.update',
//   CATEGORIES_DELETE: 'categories.delete',
// } as const;

// // Tipo útil para el decorator @RequirePermission()
// export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

// const permissionList: { name: Permission; description: string }[] = [
//   { name: PERMISSIONS.USERS_READ,        description: 'Ver listado y detalle de usuarios' },
//   { name: PERMISSIONS.USERS_CREATE,      description: 'Crear nuevos usuarios' },
//   { name: PERMISSIONS.USERS_UPDATE,      description: 'Editar usuarios existentes' },
//   { name: PERMISSIONS.USERS_DELETE,      description: 'Eliminar usuarios' },

//   { name: PERMISSIONS.ROLES_READ,        description: 'Ver roles del sistema' },
//   { name: PERMISSIONS.ROLES_ASSIGN,      description: 'Asignar roles a usuarios' },

//   { name: PERMISSIONS.PERMISSIONS_READ,  description: 'Ver permisos del sistema' },

//   { name: PERMISSIONS.PRODUCTS_READ,     description: 'Ver productos' },
//   { name: PERMISSIONS.PRODUCTS_CREATE,   description: 'Crear productos' },
//   { name: PERMISSIONS.PRODUCTS_UPDATE,   description: 'Editar productos' },
//   { name: PERMISSIONS.PRODUCTS_DELETE,   description: 'Eliminar productos' },

//   { name: PERMISSIONS.CATEGORIES_READ,   description: 'Ver categorías' },
//   { name: PERMISSIONS.CATEGORIES_CREATE, description: 'Crear categorías' },
//   { name: PERMISSIONS.CATEGORIES_UPDATE, description: 'Editar categorías' },
//   { name: PERMISSIONS.CATEGORIES_DELETE, description: 'Eliminar categorías' },
// ];

// export async function seedPermissions() {
//   console.log('🌱 Seeding permissions...');

//   for (const permission of permissionList) {
//     await prisma.permission.upsert({
//       where: { name: permission.name },
//       update: { description: permission.description },
//       create: permission,
//     });
//   }

//   console.log(`✅ ${permissionList.length} permisos creados/actualizados.`);
// }


//REF CHAT
import { PrismaClient } from '@prisma/client';

const permissions = [
  'users.read',
  'users.create',
  'users.update',
  'users.delete',

  'roles.read',
  'roles.assign',

  'permissions.read',

  'products.read',
  'products.create',
  'products.update',
  'products.delete',

  'categories.read',
  'categories.create',
  'categories.update',
  'categories.delete',
];

export async function seedPermissions(
  prisma: PrismaClient,
) {
  for (const permission of permissions) {
    await prisma.permission.upsert({
      where: {
        name: permission,
      },
      update: {},
      create: {
        name: permission,
      },
    });
  }
}
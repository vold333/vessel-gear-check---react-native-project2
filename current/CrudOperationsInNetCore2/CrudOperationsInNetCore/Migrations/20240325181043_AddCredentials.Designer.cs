﻿// <auto-generated />
using CrudOperationsInNetCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace CrudOperationsInNetCore.Migrations
{
    [DbContext(typeof(BrandContext))]
    [Migration("20240325181043_AddCredentials")]
    partial class AddCredentials
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("CrudOperationsInNetCore.Models.Brand", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Department")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Section")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Brands");
                });

            modelBuilder.Entity("CrudOperationsInNetCore.Models.DefaultChecklist", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Department")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Order")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Section")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("DefaultChecklists");
                });

            modelBuilder.Entity("CrudOperationsInNetCore.Models.NewChecklist", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Department")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Section")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("NewChecklists");
                });

            modelBuilder.Entity("CrudOperationsInNetCore.Models.User_info", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(16)
                        .HasColumnType("nvarchar(16)");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("User_Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("User_infos");
                });

            modelBuilder.Entity("CrudOperationsInNetCore.Models.VesselProfile", b =>
                {
                    b.Property<int>("IMO_number")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("IMO_number"));

                    b.Property<string>("Captain_name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Country")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Histroy")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IMO_type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Maintenance_schedule")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name_of_chief_engineer")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name_of_chief_mate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Registry")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Vessel_id")
                        .HasColumnType("int");

                    b.Property<string>("Vessel_name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Vessel_type_class")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IMO_number");

                    b.ToTable("VesselProfiles");
                });
#pragma warning restore 612, 618
        }
    }
}
